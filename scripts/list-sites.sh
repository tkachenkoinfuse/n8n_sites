#!/bin/bash

# list-sites.sh - List all configured n8n sites
# Usage: ./list-sites.sh [--format json|table]

set -euo pipefail

# Configuration
SITES_DIR="$(cd "$(dirname "$0")/../sites" && pwd)"
FORMAT="${1:-table}"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print usage
print_usage() {
    echo "Usage: $0 [--format json|table]"
    echo ""
    echo "Options:"
    echo "  --format json   Output in JSON format"
    echo "  --format table  Output in table format (default)"
    echo "  -h, --help      Show this help message"
}

# Parse arguments
if [[ "${1:-}" == "-h" ]] || [[ "${1:-}" == "--help" ]]; then
    print_usage
    exit 0
fi

if [[ "${1:-}" == "--format" ]] && [[ -n "${2:-}" ]]; then
    FORMAT="$2"
fi

# Check if sites directory exists
if [[ ! -d "$SITES_DIR" ]]; then
    echo -e "${RED}Error: Sites directory not found: $SITES_DIR${NC}" >&2
    exit 1
fi

# Function to get current date in YYYY-MM-DD format
current_date() {
    date +%Y-%m-%d
}

# Function to check if date is expired
is_expired() {
    local expire_date="$1"
    local current=$(current_date)
    
    if [[ "$expire_date" < "$current" ]]; then
        return 0  # expired
    else
        return 1  # not expired
    fi
}

# Function to list sites in table format
list_sites_table() {
    echo -e "${BLUE}=== n8n Temporary Sites ===${NC}"
    echo ""
    printf "%-30s %-15s %-12s %-12s %-10s\n" "SITE NAME" "OWNER" "CREATED" "EXPIRES" "STATUS"
    printf "%-30s %-15s %-12s %-12s %-10s\n" "$(printf '%.0s-' {1..30})" "$(printf '%.0s-' {1..15})" "$(printf '%.0s-' {1..12})" "$(printf '%.0s-' {1..12})" "$(printf '%.0s-' {1..10})"
    
    local count=0
    for site_dir in "$SITES_DIR"/*/ ; do
        if [[ -d "$site_dir" ]] && [[ -f "$site_dir/config.json" ]]; then
            local name=$(basename "$site_dir")
            local config="$site_dir/config.json"
            
            # Check if jq is available
            if command -v jq &> /dev/null; then
                local owner=$(jq -r '.owner // "unknown"' "$config")
                local created=$(jq -r '.created // "unknown"' "$config")
                local expires=$(jq -r '.expires // "unknown"' "$config")
                
                local status="Active"
                local status_color="${GREEN}"
                
                if [[ "$expires" != "unknown" ]] && is_expired "$expires"; then
                    status="Expired"
                    status_color="${RED}"
                fi
                
                printf "%-30s %-15s %-12s %-12s " "$name" "$owner" "$created" "$expires"
                echo -e "${status_color}${status}${NC}"
            else
                printf "%-30s %-15s %-12s %-12s %-10s\n" "$name" "N/A" "N/A" "N/A" "Unknown"
            fi
            
            ((count++))
        fi
    done
    
    echo ""
    echo -e "${BLUE}Total sites: $count${NC}"
    
    if ! command -v jq &> /dev/null; then
        echo -e "${YELLOW}Note: Install 'jq' for detailed site information${NC}"
    fi
}

# Function to list sites in JSON format
list_sites_json() {
    local sites="["
    local first=true
    
    for site_dir in "$SITES_DIR"/*/ ; do
        if [[ -d "$site_dir" ]] && [[ -f "$site_dir/config.json" ]]; then
            if [[ "$first" == true ]]; then
                first=false
            else
                sites+=","
            fi
            
            if command -v jq &> /dev/null; then
                local config=$(cat "$site_dir/config.json")
                sites+="$config"
            else
                sites+="{\"error\":\"jq not installed\"}"
            fi
        fi
    done
    
    sites+="]"
    
    if command -v jq &> /dev/null; then
        echo "$sites" | jq .
    else
        echo "$sites"
    fi
}

# Main execution
case "$FORMAT" in
    json)
        list_sites_json
        ;;
    table)
        list_sites_table
        ;;
    *)
        echo -e "${RED}Error: Invalid format '$FORMAT'. Use 'json' or 'table'${NC}" >&2
        print_usage
        exit 1
        ;;
esac
