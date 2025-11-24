# Sites Directory

This directory contains configurations for individual temporary n8n sites.

## Creating a New Site

### Structure

Each site should have its own subdirectory with the following structure:

```
sites/
└── site-name/
    ├── config.json       # Site-specific configuration
    ├── workflows/        # n8n workflow files
    ├── credentials/      # Credential configurations (encrypted)
    └── README.md         # Site-specific documentation
```

### Naming Convention

Use descriptive names for site directories:
- `demo-[purpose]-[date]` - For demonstrations
- `test-[feature]-[date]` - For testing
- `dev-[developer]-[date]` - For development

Examples:
- `demo-crm-integration-2025-11`
- `test-webhook-flow-2025-11`
- `dev-john-api-testing-2025-11`

### Configuration Template

Create a `config.json` file with the following structure:

```json
{
  "name": "site-name",
  "description": "Brief description of the site purpose",
  "owner": "owner-name",
  "created": "2025-11-24",
  "expires": "2025-12-24",
  "environment": {
    "N8N_PORT": "5678",
    "N8N_PROTOCOL": "http",
    "N8N_HOST": "localhost"
  },
  "tags": ["demo", "testing"]
}
```

### Best Practices

1. **Document Everything**: Include a README.md explaining the site's purpose
2. **Set Expiration Dates**: Temporary sites should have clear end dates
3. **Use Environment Variables**: Keep sensitive data in environment files, not in git
4. **Clean Up**: Remove sites after their expiration date
5. **Tag Appropriately**: Use tags for easy filtering and management

### Example Site

See the `example-site/` directory (if available) for a reference implementation.

### Security Notes

- Never commit actual credentials or API keys
- Use environment variables or secret management
- Encrypt sensitive configuration files
- Review security settings before deployment

## Listing Sites

To see all active sites:

```bash
ls -la sites/
```

To find sites by tag or owner, check the config.json files in each directory.
