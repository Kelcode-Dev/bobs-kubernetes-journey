# Helm Chart for Bob's To-Do Application

This repository contains a Helm chart for deploying Bob's To-Do application on Kubernetes, using the latest `helm create` scaffolding.

## Files

### Chart Metadata
1. **`Chart.yaml`**: Contains metadata about the Helm chart

### Configuration
1. **`values.yaml`**: Default values for the Helm chart, which can be overridden during deployment

### Templates
1. **`templates/deployment.yaml`**: Template for deploying the application
2. **`templates/service.yaml`**: Template for creating a Kubernetes Service
3. **`templates/ingress.yaml`**: Template for creating an Ingress resource
4. **`templates/hpa.yaml`**: Template for configuring a HorizontalPodAutoscaler
5. **`templates/serviceaccount.yaml`**: Template for creating a ServiceAccount
6. **`templates/tests/test-connection.yaml`**: A Helm test template to verify connectivity
7. **`NOTES.txt`**: Installation notes displayed after deploying the chart

## Instructions

### Deploy the Chart
1. Package the chart:
   ```bash
   helm package my-example-app
   ```
2. Install the chart:
   ```bash
   helm install my-app ./my-example-app
   ```

### Verify the Deployment
1. Check pod status:
   ```bash
   kubectl get pods
   ```
2. Run Helm tests:
   ```bash
   helm test my-app
   ```

## Learn More

Visit the [article](https://kelcode.co.uk/bobs-journey-into-helm-charting-a-new-course/) for a detailed guide.
