# Configuration Templates

This directory contains shared configuration templates and reusable settings for n8n sites.

## Available Templates

### base-config.json
Basic n8n configuration template with common settings.

```json
{
  "database": {
    "type": "sqlite",
    "sqlite": {
      "database": "database.sqlite"
    }
  },
  "credentials": {
    "overwrite": {
      "data": "{}"
    }
  },
  "executions": {
    "saveDataOnError": "all",
    "saveDataOnSuccess": "all",
    "saveDataManualExecutions": true
  },
  "timezone": "UTC"
}
```

### docker-compose.template.yml
Docker Compose template for containerized deployments.

### nginx.template.conf
Nginx configuration template for proxying n8n sites.

## Using Templates

1. **Copy the template** to your site directory
2. **Customize** the values for your specific needs
3. **Rename** to remove `.template` from the filename
4. **Test** the configuration before deployment

## Environment Variables

Common environment variables used across templates:

- `N8N_BASIC_AUTH_ACTIVE` - Enable/disable basic authentication
- `N8N_BASIC_AUTH_USER` - Basic auth username
- `N8N_BASIC_AUTH_PASSWORD` - Basic auth password
- `N8N_HOST` - Host URL for n8n
- `N8N_PORT` - Port number for n8n
- `N8N_PROTOCOL` - HTTP or HTTPS
- `WEBHOOK_URL` - Base URL for webhooks
- `GENERIC_TIMEZONE` - Timezone setting
- `N8N_ENCRYPTION_KEY` - Encryption key for credentials

## Creating New Templates

When creating a new template:
1. Use `.template` suffix in filename
2. Use placeholder values (e.g., `YOUR_VALUE_HERE`)
3. Document all required values
4. Include comments explaining each section
5. Test with a sample deployment

## Security Considerations

- Templates should not contain actual secrets
- Use placeholder values for sensitive data
- Document which values need to be kept secret
- Include instructions for secure value generation

## Version Control

- Keep templates generic and reusable
- Document any version-specific requirements
- Update templates when n8n updates introduce breaking changes
