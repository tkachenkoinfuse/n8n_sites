# Getting Started with n8n Temporary Sites

This guide will walk you through setting up your first temporary n8n site.

## Prerequisites

Before you begin, ensure you have:

- Git installed on your system
- Access to this repository
- Docker and Docker Compose (for containerized deployments)
- Basic knowledge of command line operations

## Step 1: Clone the Repository

```bash
git clone https://github.com/tkachenkoinfuse/n8n_sites.git
cd n8n_sites
```

## Step 2: Understand the Structure

The repository has the following main directories:

- **`sites/`** - Where individual site configurations live
- **`configs/`** - Reusable configuration templates
- **`scripts/`** - Helper scripts for managing sites
- **`docs/`** - Documentation (you're reading this!)

## Step 3: Create Your First Site

### 3.1 Create a site directory

Choose a descriptive name following the naming convention:

```bash
mkdir -p sites/demo-myproject-2025-11
cd sites/demo-myproject-2025-11
```

### 3.2 Copy configuration template

```bash
cp ../../configs/base-config.template.json config.json
```

### 3.3 Edit the configuration

Open `config.json` and update:

- `name`: Your site name
- `description`: Brief description of the site purpose
- `owner`: Your name
- `created`: Today's date (YYYY-MM-DD)
- `expires`: Expiration date (YYYY-MM-DD)
- `environment.N8N_BASIC_AUTH_PASSWORD`: A secure password

Example:

```json
{
  "name": "demo-myproject-2025-11",
  "description": "Demo site for testing webhook integrations",
  "owner": "john.doe",
  "created": "2025-11-24",
  "expires": "2025-12-24",
  "environment": {
    "N8N_BASIC_AUTH_ACTIVE": "true",
    "N8N_BASIC_AUTH_USER": "admin",
    "N8N_BASIC_AUTH_PASSWORD": "your-secure-password-here",
    "N8N_HOST": "localhost",
    "N8N_PORT": "5679",
    "N8N_PROTOCOL": "http",
    "WEBHOOK_URL": "http://localhost:5679/",
    "GENERIC_TIMEZONE": "UTC"
  },
  "tags": ["demo", "webhooks"]
}
```

### 3.4 Create a README

```bash
echo "# Demo My Project" > README.md
echo "" >> README.md
echo "This site is for testing webhook integrations." >> README.md
```

### 3.5 Create workflows directory

```bash
mkdir workflows
```

## Step 4: Deploy Your Site (Docker Method)

### 4.1 Copy docker-compose template

```bash
cp ../../configs/docker-compose.template.yml docker-compose.yml
```

### 4.2 Edit docker-compose.yml

Replace the following placeholders:

- `SITE_NAME` → Your site name (e.g., `demo-myproject-2025-11`)
- `PORT_NUMBER` → An available port (e.g., `5679`)
- `YOUR_HOST` → Your hostname or `localhost`
- `CHANGE_THIS_PASSWORD` → Your secure password
- `GENERATE_A_SECURE_KEY` → A random secure key (use `openssl rand -hex 32`)

### 4.3 Start the site

```bash
docker-compose up -d
```

### 4.4 Verify it's running

```bash
docker-compose ps
docker-compose logs
```

## Step 5: Access Your n8n Instance

1. Open your browser
2. Navigate to `http://localhost:5679` (or your configured port)
3. Login with your configured credentials
4. Start creating workflows!

## Step 6: List All Sites

To see all configured sites:

```bash
cd /path/to/n8n_sites
./scripts/list-sites.sh
```

## Step 7: Stop Your Site

When you're done:

```bash
cd sites/demo-myproject-2025-11
docker-compose down
```

To remove all data:

```bash
docker-compose down -v
```

## Common Tasks

### Check site status

```bash
docker-compose ps
```

### View logs

```bash
docker-compose logs -f
```

### Restart site

```bash
docker-compose restart
```

### Update site

```bash
docker-compose pull
docker-compose up -d
```

## Next Steps

- Read [Configuration Guide](configuration.md) for advanced options
- Check [Deployment Guide](deployment.md) for other deployment methods
- Review [Security Guide](security.md) for best practices

## Troubleshooting

### Port already in use

If you get a port conflict, change the port in `docker-compose.yml` to an available one.

### Cannot connect to n8n

1. Check if the container is running: `docker-compose ps`
2. View logs for errors: `docker-compose logs`
3. Ensure the port is not blocked by firewall
4. Try accessing from a different browser

### Need help?

Check the [Troubleshooting Guide](troubleshooting.md) or contact the repository maintainer.
