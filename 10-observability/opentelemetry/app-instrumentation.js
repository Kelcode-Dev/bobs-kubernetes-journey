const opentelemetry = require('@opentelemetry/api');
const tracer = opentelemetry.trace.getTracer('example-app');

const span = tracer.startSpan('http_request');
span.addEvent('Processing request', { key: 'value' });
span.end();
