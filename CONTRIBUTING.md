# Contributing to n8n Temporary Sites

Thank you for your interest in contributing to this repository! This guide will help you understand how to add new sites, improve documentation, and maintain the repository.

## How to Contribute

### Adding a New Site

1. **Create a site directory** under `sites/` following the naming convention:
   ```bash
   mkdir -p sites/your-site-name-2025-11
   ```

2. **Copy the configuration template:**
   ```bash
   cp configs/base-config.template.json sites/your-site-name-2025-11/config.json
   ```

3. **Update the configuration** with your site details:
   - Site name and description
   - Owner information
   - Creation and expiration dates
   - Environment variables
   - Tags

4. **Add a README** explaining the site's purpose:
   ```bash
   echo "# Your Site Name" > sites/your-site-name-2025-11/README.md
   ```

5. **Create workflow directory:**
   ```bash
   mkdir -p sites/your-site-name-2025-11/workflows
   ```

6. **Commit your changes:**
   ```bash
   git add sites/your-site-name-2025-11/
   git commit -m "Add new site: your-site-name-2025-11"
   git push
   ```

### Improving Documentation

Documentation improvements are always welcome:

1. Check existing documentation in `docs/`
2. Create or update relevant files
3. Follow the markdown style guide
4. Include examples where applicable
5. Test all commands and code snippets
6. Submit a pull request with clear description

### Adding Scripts

When adding new management scripts:

1. Place scripts in the `scripts/` directory
2. Use bash and follow shell script best practices
3. Include help text and usage examples
4. Add error handling and validation
5. Make scripts executable: `chmod +x scripts/your-script.sh`
6. Document the script in `scripts/README.md`
7. Test thoroughly before committing

### Updating Templates

To update configuration templates:

1. Edit files in `configs/` directory
2. Keep templates generic and reusable
3. Use placeholder values for sensitive data
4. Document all required variables
5. Test templates with example sites

## Code Style and Standards

### Shell Scripts

- Use `#!/bin/bash` shebang
- Set strict mode: `set -euo pipefail`
- Include help text accessible with `-h` or `--help`
- Validate all inputs
- Use meaningful variable names
- Comment complex logic
- Exit with appropriate status codes

### JSON Configuration

- Use 2-space indentation
- Include all required fields
- Use clear, descriptive keys
- Document purpose of each field
- Validate JSON syntax before committing

### Markdown Documentation

- Use clear, hierarchical headings
- Include code blocks with language tags
- Provide practical examples
- Keep line length reasonable
- Use consistent formatting
- Check spelling and grammar

## Git Workflow

1. **Create a feature branch:**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Keep commits focused and atomic
   - Write clear commit messages
   - Test your changes

3. **Commit with descriptive messages:**
   ```bash
   git commit -m "Add: brief description of what you added"
   ```

4. **Push to remote:**
   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a pull request**
   - Describe what you changed and why
   - Reference any related issues
   - Request review if needed

## Commit Message Convention

Use clear, descriptive commit messages:

- `Add: [description]` - Adding new features or files
- `Update: [description]` - Updating existing content
- `Fix: [description]` - Fixing bugs or issues
- `Remove: [description]` - Removing deprecated content
- `Docs: [description]` - Documentation changes only
- `Refactor: [description]` - Code refactoring

Examples:
- `Add: new site configuration for demo-crm-2025-11`
- `Update: deployment script with better error handling`
- `Fix: config template missing encryption key field`
- `Docs: improve README with more examples`

## Testing

Before submitting:

1. **Validate JSON files:**
   ```bash
   jq . sites/your-site/config.json
   ```

2. **Test scripts:**
   ```bash
   shellcheck scripts/your-script.sh
   ./scripts/your-script.sh --help
   ```

3. **Check for syntax errors:**
   - JSON: Use a JSON validator
   - Shell: Use `shellcheck`
   - Markdown: Use a markdown linter

## Security Guidelines

- Never commit actual credentials or API keys
- Use placeholder values in templates
- Review `.gitignore` to ensure sensitive files are excluded
- Document security considerations in your changes
- Follow the principle of least privilege

## Getting Help

If you need help:
1. Check the documentation in `docs/`
2. Review the example site in `sites/example-site/`
3. Look at existing sites for reference
4. Contact the repository maintainer

## Code of Conduct

- Be respectful and constructive
- Follow the guidelines
- Help others learn
- Keep the repository clean and organized
- Document your work

## License

By contributing, you agree that your contributions will be subject to the same license as the repository.

Thank you for contributing! 🎉
