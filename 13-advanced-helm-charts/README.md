# Helm Chart: Advanced Kubernetes Helm Charting

This repository supports the article [Bob's Journey into Advanced Helm: Mastering Charts](https://kelcode.co.uk/bobs-journey-into-advanced-helm-mastering-charts/). It demonstrates how to create dynamic and flexible Helm charts for Kubernetes deployments.

## Features
- **Dynamic Environments**:
  - Supports multiple environments (e.g., production, staging) via `values.yaml` overlays.
  - Default resource configurations with environment-specific overrides.
- **Service Dependencies**:
  - Includes examples of integrating Helm dependencies like Redis.
  - Configures dependencies directly in `Chart.yaml` with dynamic `values.yaml` overrides.
- **Advanced Templating**:
  - Demonstrates reusable blocks for dynamic deployments and PersistentVolumeClaims.
  - Simplifies YAML management using the `range` function and conditional flags.

## File Structure
```plaintext
13-helm-advanced-chart/
├── templates/                 # Kubernetes manifest templates
│   ├── deployment.yaml        # Dynamic application deployments
│   ├── pvc.yaml               # PersistentVolumeClaim templates
├── README.md                  # Project documentation
├── values.production.yaml     # Production-specific overrides
├── values.staging.yaml        # Staging-specific overrides
├── values.yaml                # Default configuration values
```

## Usage

### Deploy the Applications
1. Clone this repository:
   ```bash
   git clone https://github.com/Kelcode-Dev/bobs-kubernetes-journey.git
   cd bobs-kubernetes-journey/13-helm-advanced-chart
   ```

2. Deploy the Helm chart with default values:
   ```bash
   helm install advanced-chart . -f values.yaml
   ```

3. Deploy with environment-specific overrides:
   ```bash
   helm install advanced-chart . -f values.production.yaml
   ```

4. Customise the `apps` or `volumes` blocks in `values.yaml` to fit your requirements:
   - Add new apps with unique `name`, `replicas`, and `image` fields.
   - Define PersistentVolumeClaims with dynamic settings for storage and access.

### Validate and Test
- Inspect generated Kubernetes manifests:
  ```bash
  helm template advanced-chart . -f values.yaml > dryrun.yaml
  ```

- Use tools like Trivy to scan for security or configuration issues:
  ```bash
  trivy config dryrun.yaml
  ```

## Learn More
For a detailed walkthrough, check out the article: [Bob's Journey into Advanced Helm: Mastering Charts](https://kelcode.co.uk/bobs-journey-into-advanced-helm-mastering-charts/).
