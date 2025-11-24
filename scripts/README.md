# Deployment and Management Scripts

This directory contains scripts for deploying, managing, and maintaining temporary n8n sites.

## Available Scripts

### Deployment Scripts

- `deploy.sh` - Deploy a new site
- `update.sh` - Update an existing site
- `teardown.sh` - Remove a site and clean up resources

### Management Scripts

- `list-sites.sh` - List all active sites
- `check-health.sh` - Health check for running sites
- `cleanup-expired.sh` - Remove sites past their expiration date
- `backup-site.sh` - Backup a site's data and configuration

## Usage

### Deploying a New Site

```bash
./scripts/deploy.sh --site-name demo-site-2025-11 --config sites/demo-site-2025-11/config.json
```

### Listing Active Sites

```bash
./scripts/list-sites.sh
```

### Checking Site Health

```bash
./scripts/check-health.sh --site-name demo-site-2025-11
```

### Cleaning Up Expired Sites

```bash
./scripts/cleanup-expired.sh --dry-run  # Preview what will be removed
./scripts/cleanup-expired.sh             # Actually remove expired sites
```

### Tearing Down a Site

```bash
./scripts/teardown.sh --site-name demo-site-2025-11
```

## Script Development

When creating new scripts:

1. **Follow Shell Script Best Practices**
   - Use `#!/bin/bash` shebang
   - Set strict mode: `set -euo pipefail`
   - Include help text with `-h` or `--help`
   - Validate inputs

2. **Error Handling**
   - Check for required dependencies
   - Provide clear error messages
   - Exit with appropriate status codes
   - Log operations for auditing

3. **Documentation**
   - Include usage examples in script header
   - Document all parameters
   - Explain prerequisites
   - Note any side effects

4. **Security**
   - Never hardcode credentials
   - Use environment variables or config files
   - Validate all inputs
   - Sanitize user-provided data

## Prerequisites

Most scripts require:
- Bash 4.0 or higher
- Basic Unix utilities (grep, sed, awk)
- jq for JSON processing
- Docker (for containerized deployments)
- Appropriate permissions for deployment targets

## Environment Variables

Scripts may use these environment variables:

- `N8N_SITES_ROOT` - Root directory for site deployments
- `N8N_SITES_CONFIG` - Configuration directory path
- `N8N_DEFAULT_PORT` - Default port for new sites
- `LOG_LEVEL` - Logging verbosity (debug, info, warn, error)

## Logging

Scripts should log to:
- Console: Important messages and errors
- Log file: `logs/script-name-YYYY-MM-DD.log`

Use consistent log levels:
- `DEBUG`: Detailed diagnostic information
- `INFO`: Normal operational messages
- `WARN`: Warning messages for potential issues
- `ERROR`: Error messages for failures

## Testing

Test scripts before deployment:
1. Use `--dry-run` flags where available
2. Test in a non-production environment
3. Verify cleanup operations work correctly
4. Check error handling paths

## Contributing

When adding new scripts:
1. Follow the existing naming convention
2. Include comprehensive help text
3. Add entry to this README
4. Test thoroughly
5. Document any new dependencies
