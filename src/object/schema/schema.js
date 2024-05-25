/**
 * @typedef {'string' | 'number' | 'integer' | 'boolean' | 'array' | 'object' | 'null'} JsonSchemaType
 */

/**
 * @typedef {Object} JsonSchema
 * @property {JsonSchemaType | JsonSchemaType[]} [type]
 * @property {Object.<string, JsonSchema>} [properties]
 * @property {JsonSchema | JsonSchema[]} [items]
 * @property {string[]} [required]
 * @property {string} [format]
 * @property {string} [pattern]
 * @property {number} [minimum]
 * @property {number} [maximum]
 * @property {number} [minLength]
 * @property {number} [maxLength]
 */
class JsonSchemaBuilder {
  /**
   * Creates an instance of JsonSchemaBuilder.
   * @param {JsonSchemaType} type - The type of the schema.
   */
  constructor(type) {
    /**
     * @type {JsonSchema}
     */
    this.schema = { type };
  }

  /**
   * Adds a property to the schema.
   * @param {string} name - The name of the property.
   * @param {JsonSchemaBuilder} schema - The schema of the property.
   * @returns {JsonSchemaBuilder}
   */
  addProperty(name, schema) {
    if (!this.schema.properties) {
      this.schema.properties = {};
    }
    this.schema.properties[name] = schema.build();
    return this;
  }

  /**
   * Sets the required properties for the schema.
   * @param {...string} properties - The required properties.
   * @returns {JsonSchemaBuilder}
   */
  setRequired(...properties) {
    this.schema.required = properties;
    return this;
  }

  /**
   * Sets the format for the schema.
   * @param {string} format - The format of the schema.
   * @returns {JsonSchemaBuilder}
   */
  setFormat(format) {
    this.schema.format = format;
    return this;
  }

  /**
   * Sets the pattern for the schema.
   * @param {string} pattern - The pattern of the schema.
   * @returns {JsonSchemaBuilder}
   */
  setPattern(pattern) {
    this.schema.pattern = pattern;
    return this;
  }

  /**
   * Sets the minimum value for the schema.
   * @param {number} minimum - The minimum value.
   * @returns {JsonSchemaBuilder}
   */
  setMinimum(minimum) {
    this.schema.minimum = minimum;
    return this;
  }

  /**
   * Sets the maximum value for the schema.
   * @param {number} maximum - The maximum value.
   * @returns {JsonSchemaBuilder}
   */
  setMaximum(maximum) {
    this.schema.maximum = maximum;
    return this;
  }

  /**
   * Sets the minimum length for the schema.
   * @param {number} minLength - The minimum length.
   * @returns {JsonSchemaBuilder}
   */
  setMinLength(minLength) {
    this.schema.minLength = minLength;
    return this;
  }

  /**
   * Sets the maximum length for the schema.
   * @param {number} maxLength - The maximum length.
   * @returns {JsonSchemaBuilder}
   */
  setMaxLength(maxLength) {
    this.schema.maxLength = maxLength;
    return this;
  }

  /**
   * Adds an item schema to the array schema.
   * @param {JsonSchemaBuilder} itemSchema - The schema of the item.
   * @returns {JsonSchemaBuilder}
   */
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

  /**
   * Builds and returns the JSON schema.
   * @returns {JsonSchema}
   */
  build() {
    return this.schema;
  }
}
export default JsonSchemaBuilder;

