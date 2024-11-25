# Kubernetes Application Observability Examples

This repository contains configuration files for setting up observability tools in Kubernetes.

## Files

### Loki and Promtail
1. **`loki-config.yaml`**: Configuration file for Loki, a log aggregation system
2. **`promtail-config.yaml`**: Configuration for Promtail, which collects logs and pushes them to Loki

### Grafana
1. **`example-dashboard.json`**: A sample Grafana dashboard for visualising application metrics

### Tracing
1. **`opentelemetry-config.yaml`**: Configuration for OpenTelemetry Collector for distributed tracing

## Instructions

### Deploy Loki and Promtail
1. Deploy Loki:
   ```bash
   kubectl apply -f loki/loki-config.yaml
   ```
2. Deploy Promtail:
   ```bash
   kubectl apply -f loki/promtail-config.yaml
   ```

### Import the Grafana Dashboard
1. Open Grafana.
2. Import `example-dashboard.json` under the Dashboards section.

### Deploy OpenTelemetry
1. Apply the OpenTelemetry configuration:
   ```bash
   kubectl apply -f tracing/opentelemetry-config.yaml
   ```

## Learn More

Visit the [article](https://kelcode.co.uk/kubernetes-uncovering-hidden-threats/) for detailed explanations.
