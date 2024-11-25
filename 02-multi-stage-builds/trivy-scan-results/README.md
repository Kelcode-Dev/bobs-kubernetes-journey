# Trivy Scan Results

This directory contains example outputs from Trivy, a vulnerability scanning tool for container images.

## Files

- **`scan-summary.txt`**: A text-based summary of vulnerabilities.
- **`scan-detailed.json`**: A detailed JSON report of vulnerabilities.

## Summary of Results

- **Total Vulnerabilities**:
  - LOW: 2
  - HIGH: 1
  - CRITICAL: 0

- **Notable Vulnerabilities**:
  1. **libcrypto3**:
     - CVE-2024-9143 (LOW)
     - Fixed in version 3.3.2-r1
     - [More details](https://avd.aquasec.com/nvd/cve-2024-9143)

  2. **cross-spawn**:
     - CVE-2024-21538 (HIGH)
     - Fixed in version 7.0.5
     - [More details](https://avd.aquasec.com/nvd/cve-2024-21538)

## Generate Your Own Results

To scan your Docker image with Trivy:
```bash
trivy image multi-stage-todo-app
```
