type JsonSchemaType = 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'object' | 'null';

interface JsonSchema {
  type?: JsonSchemaType | JsonSchemaType[];
  properties?: Record<string, JsonSchema>;
  items?: JsonSchema | JsonSchema[];
  required?: string[];
  format?: string;
  pattern?: string;
  minimum?: number;
  maximum?: number;
  minLength?: number;
  maxLength?: number;
}

class JsonSchemaBuilder {
  private schema: JsonSchema;

  constructor(type: JsonSchemaType) {
    this.schema = { type };
  }

  addProperty(name: string, schema: JsonSchemaBuilder) {
    if (!this.schema.properties) {
      this.schema.properties = {};
    }
    this.schema.properties[name] = schema.build();
    return this;
  }

  setRequired(...properties: string[]) {
    this.schema.required = properties;
    return this;
  }

  setFormat(format: string) {
    this.schema.format = format;
    return this;
  }

  setPattern(pattern: string) {
    this.schema.pattern = pattern;
    return this;
  }

  setMinimum(minimum: number) {
    this.schema.minimum = minimum;
    return this;
  }

  setMaximum(maximum: number) {
    this.schema.maximum = maximum;
    return this;
  }

  setMinLength(minLength: number) {
    this.schema.minLength = minLength;
    return this;
  }

  setMaxLength(maxLength: number) {
    this.schema.maxLength = maxLength;
    return this;
  }

  addItem(itemSchema: JsonSchemaBuilder) {
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

  build(): JsonSchema {
    return this.schema;
  }
}

export { JsonSchemaBuilder };



