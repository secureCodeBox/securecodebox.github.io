---
title: "Elasticsearch"
path: "persistence-provider/elasticsearch"
category: "persistence provider"
---

## About

The ElasticSearch PersistenceProvider saves all findings and reports into the configured ElasticSearch index. This allows for some easy searching and visualisation of the findings. To learn more about Elasticsearch visit [elastic.io].

## Configuration

### Setting the Persistence Provider

The engine supports multiple different persistence providers. Each of the prepackaged persistence providers can be toggle on by using environment variables.

The currently availible persistence providers are:

| Name          | Environment Variable                              | Default Value |
| ------------- | ------------------------------------------------- | ------------- |
| Elasticsearch | `SECURECODEBOX_PERSISTENCE_ELASTICSEARCH_ENABLED` | `"false"`     |
| DefectDojo    | `SECURECODEBOX_PERSISTENCE_DEFECTDOJO_ENABLED`    | `"false"`     |
| S3            | `SECURECODEBOX_PERSISTENCE_S3_ENABLED`            | `"false"`     |
| None          | `SECURECODEBOX_PERSISTENCE_NONE_ENABLED`          | `"false"`     |

To activate the persistence providers the `enabled` variable must be set to `"true"`.

> **Note**: Most PersistenceProviders require additional configuration to set the location and access credentials. These are documented in the sections for the individual persistence providers below.

The corresponding PersistenceProvider-implementation class must have a matching `@ConditionalOnProperty` annotation, e.g. `@ConditionalOnProperty(name = "securecodebox.persistence.elasticsearch.enabled", havingValue = "true")` for Elasticsearch.

## Specific Settings

#### Enabling Elasticsearch as Persistence Provider

To use Elasticsearch for persistence set `securecodebox.persistence.elasticsearch.enabled` or the corresponding environment variable to `"true"`.

#### Properties / Environment Variables

| Property                                             | Example Value | Mandatory |
| ---------------------------------------------------- | ------------- | --------- |
| securecodebox.persistence.elasticsearch.host         | elasticsearch | yes       |
| securecodebox.persistence.elasticsearch.port         | 9200          | yes       |
| securecodebox.persistence.elasticsearch.index.prefix | securecodebox | yes       |

Alternatively the corresponding environment variables, e.g. `SECURECODEBOX_PERSISTENCE_ELASTICSEARCH_HOST` can be used.

[elastic.io]: https://www.elastic.co/products/elasticsearch