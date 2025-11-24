# Example Site

This is an example site configuration to demonstrate the structure and setup of a temporary n8n site.

## Purpose

This example shows:
- How to structure a site directory
- What files are needed
- How to configure the site
- Best practices for documentation

## Configuration

See `config.json` for the site configuration. This includes:
- Basic site metadata (name, owner, dates)
- Environment variables for n8n
- Tags for categorization

## Workflows

Place your n8n workflow JSON files in the `workflows/` directory. These can be:
- Exported from another n8n instance
- Created manually
- Generated programmatically

## Deployment

To deploy this example site:

1. **Copy the docker-compose template:**
   ```bash
   cp ../../configs/docker-compose.template.yml docker-compose.yml
   ```

2. **Update the docker-compose.yml with your values:**
   - Replace `SITE_NAME` with `example-site`
   - Choose an available port
   - Set secure passwords

3. **Start the site:**
   ```bash
   docker-compose up -d
   ```

4. **Access n8n:**
   - Open browser to `http://localhost:5678`
   - Login with configured credentials

## Maintenance

- Check logs: `docker-compose logs -f`
- Stop site: `docker-compose down`
- Remove site and data: `docker-compose down -v`

## Notes

- This is just an example - do not use for production
- Always use secure passwords in real deployments
- Remember to clean up after testing
