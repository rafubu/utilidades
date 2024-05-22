// schema.ts
class JsonSchemaBuilder {
  schema;
  constructor(type) {
    this.schema = { type };
  }
  addProperty(name, schema) {
    if (!this.schema.properties) {
      this.schema.properties = {};
    }
    this.schema.properties[name] = schema.build();
    return this;
  }
  setRequired(...properties) {
    this.schema.required = properties;
    return this;
  }
  setFormat(format) {
    this.schema.format = format;
    return this;
  }
  setPattern(pattern) {
    this.schema.pattern = pattern;
    return this;
  }
  setMinimum(minimum) {
    this.schema.minimum = minimum;
    return this;
  }
  setMaximum(maximum) {
    this.schema.maximum = maximum;
    return this;
  }
  setMinLength(minLength) {
    this.schema.minLength = minLength;
    return this;
  }
  setMaxLength(maxLength) {
    this.schema.maxLength = maxLength;
    return this;
  }
  addItem(itemSchema) {
    if (!this.schema.items) {
      this.schema.items = [];
    }
    if (Array.isArray(this.schema.items)) {
      this.schema.items.push(itemSchema.build());
    } else {
      this.schema.items = [this.schema.items, itemSchema.build()];
    }
    return this;
  }
  build() {
    return this.schema;
  }
}
export {
  JsonSchemaBuilder
};
