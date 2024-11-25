# Secure Docker Images

This example demonstrates how to create a secure Docker image using best practices, such as:
- Pinning the base image version
- Using a minimal base image (e.g., Alpine)
- Running as a non-root user

## Files in This Directory

- `Dockerfile`: Example secure Dockerfile
- `trivy-scan-results/`: Placeholder for Trivy vulnerability scan results

## Steps to Build and Run

1. **Set the Build Context to the Repository Root**:
   To ensure the shared `app/` folder is included in the build, run the following command from the root of the repository:
   ```bash
   docker build -t secure-node-app -f 01-secure-docker-images/Dockerfile .
   ```

2. **Run the Container**:
   ```bash
   docker run -p 3000:3000 secure-node-app
   ```

3. **Scan the Image for Vulnerabilities**:
   Use [Trivy](https://github.com/aquasecurity/trivy) to scan for vulnerabilities:
   ```bash
   trivy image secure-node-app
   ```

## Learn More

- Article: [Secure Docker Images](https://kelcode.co.uk/secure-docker-images/)
- Tool: [Trivy Documentation](https://aquasecurity.github.io/trivy/)
