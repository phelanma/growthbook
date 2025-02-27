/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  docs: [
    "introduction",
    {
      type: "doc",
      id: "overview",
      label: "What is GrowthBook?",
    },
    {
      type: "doc",
      id: "quick-start",
      label: "Quick Start Guide",
    },
    {
      type: "category",
      collapsed: true,
      label: "Feature Flags",
      link: {
        type: "doc",
        id: "features/index",
      },
      items: [
        {
          type: "doc",
          id: "features/basics",
          label: "Basics",
        },
        {
          type: "doc",
          id: "features/environments",
          label: "Environments",
        },
        {
          type: "doc",
          id: "features/targeting",
          label: "Targeting",
        },
        {
          type: "doc",
          id: "features/rules",
          label: "Rules",
        },
        {
          type: "doc",
          id: "features/scheduling",
          label: "Scheduling",
        },
      ],
    },
    {
      type: "category",
      label: "Running Experiments",
      collapsed: true,
      link: {
        type: "doc",
        id: "experiments",
      },
      items: [
        {
          type: "doc",
          id: "feature-flag-experiments",
          label: "Feature Flags",
        },
        {
          type: "doc",
          id: "visual-editor",
          label: "Visual Editor",
        },
      ],
    },
    {
      type: "category",
      label: "Experiment Analysis",
      collapsed: true,
      items: [
        {
          type: "category",
          label: "Connecting to Your Data Warehouse",
          collapsed: true,
          link: {
            type: "doc",
            id: "experimentation-analysis/connecting-to-your-data-warehouse",
          },
          items: [
            {
              type: "doc",
              id: "warehouses/athena",
              label: "Athena",
            },
            {
              type: "doc",
              id: "warehouses/bigquery",
              label: "BigQuery",
            },
            {
              type: "doc",
              id: "warehouses/clickhouse",
              label: "Clickhouse",
            },
            {
              type: "doc",
              id: "warehouses/databricks",
              label: "Databricks",
            },
            {
              type: "doc",
              id: "warehouses/mixpanel",
              label: "Mixpanel",
            },
            {
              type: "doc",
              id: "warehouses/ms-sql-or-sql-server",
              label: "MS SQL or SQL server",
            },
            {
              type: "doc",
              id: "warehouses/mysql-or-mariadb",
              label: "MySQL or MariaDB",
            },
            {
              type: "doc",
              id: "warehouses/postgres",
              label: "Postgres",
            },
            {
              type: "doc",
              id: "warehouses/prestodb-or-trino",
              label: "PrestoDB or Trino",
            },
            {
              type: "doc",
              id: "warehouses/redshift",
              label: "Redshift",
            },
            {
              type: "doc",
              id: "warehouses/snowflake",
              label: "Snowflake",
            },
          ],
        },
        {
          type: "category",
          collapsed: true,
          link: {
            type: "doc",
            id: "experimentation-analysis/data-source-configuration",
          },
          label: "Data Source Configuration",
          items: [
            {
              type: "doc",
              id: "event-trackers/amplitude",
              label: "Amplitude",
            },
            {
              type: "doc",
              id: "event-trackers/clevertap",
              label: "CleverTap",
            },
            {
              type: "doc",
              id: "event-trackers/firebase",
              label: "Firebase",
            },
            {
              type: "doc",
              id: "event-trackers/freshpaint",
              label: "Freshpaint",
            },
            {
              type: "doc",
              id: "event-trackers/fullstory",
              label: "Fullstory",
            },
            {
              type: "doc",
              id: "event-trackers/GA4-google-analytics",
              label: "Google Analytics (GA4)",
            },
            {
              type: "doc",
              id: "event-trackers/heap",
              label: "Heap",
            },
            {
              type: "doc",
              id: "event-trackers/jitsu",
              label: "Jitsu",
            },
            {
              type: "doc",
              id: "event-trackers/keenio",
              label: "KeenIO",
            },
            {
              type: "doc",
              id: "event-trackers/matomo",
              label: "Matomo",
            },
            {
              type: "doc",
              id: "event-trackers/mixpanel",
              label: "Mixpanel",
            },
            {
              type: "doc",
              id: "event-trackers/mparticle",
              label: "MParticle",
            },
            {
              type: "doc",
              id: "event-trackers/rudderstack",
              label: "Rudderstack",
            },
            {
              type: "doc",
              id: "event-trackers/segment",
              label: "Segment",
            },
            {
              type: "doc",
              id: "event-trackers/snowplow",
              label: "Snowplow",
            },
            {
              type: "doc",
              id: "event-trackers/custom",
              label: "Custom Data Sources",
            },
          ],
        },
        {
          type: "doc",
          id: "experimentation-analysis/metrics",
          label: "Metrics",
        },
        {
          type: "doc",
          id: "experimentation-analysis/experiments",
          label: "Experiments",
        },
        {
          type: "doc",
          id: "experimentation-analysis/dimensions",
          label: "Dimensions",
        },
        {
          type: "category",
          label: "Statistics",
          collapsed: true,
          items: [
            {
              type: "doc",
              id: "statistics/overview",
              label: "Statistics Overview",
            },
            {
              type: "doc",
              id: "statistics/cuped",
              label: "Regression Adjustment (CUPED)",
              className: "pill-new",
            },
            {
              type: "doc",
              id: "statistics/multiple-corrections",
              label: "Multiple Testing Corrections",
              className: "pill-new",
            },
            {
              type: "doc",
              id: "statistics/sequential",
              label: "Sequential Testing",
              className: "pill-new",
            },
            {
              type: "doc",
              id: "statistics/aggregation",
              label: "Aggregate Data",
            },
          ],
        },
      ],
    },
    {
      type: "category",
      label: "SDKs",
      collapsed: true,
      link: {
        type: "doc",
        id: "lib/index",
      },
      items: [
        { type: "doc", id: "lib/js", label: "Javascript" },
        { type: "doc", id: "lib/react", label: "React" },
        { type: "doc", id: "lib/vue", label: "Vue.js" },
        { type: "doc", id: "lib/php", label: "PHP)" },
        { type: "doc", id: "lib/ruby", label: "Ruby" },
        { type: "doc", id: "lib/python", label: "Python" },
        { type: "doc", id: "lib/java", label: "Java", className: "pill-new" },
        { type: "doc", id: "lib/csharp", label: "C#", className: "pill-new" },
        { type: "doc", id: "lib/go", label: "Go" },
        { type: "doc", id: "lib/kotlin", label: "Kotlin (Android)" },
        { type: "doc", id: "lib/flutter", label: "Flutter" },
        { type: "doc", id: "lib/swift", label: "Swift (iOS)" },
        { type: "doc", id: "lib/build-your-own", label: "Build Your Own" },
      ],
    },
    {
      type: "category",
      label: "Self-Hosting",
      collapsed: true,
      link: {
        type: "doc",
        id: "self-host/index",
      },
      items: ["self-host/environment-variables", "self-host/config-yml"],
    },
    { type: "doc", id: "self-host/proxy", label: "Proxy" },
    { type: "doc", id: "api-overview", label: "API" },
    { type: "doc", id: "webhooks", label: "Webhooks" },
    {
      type: "category",
      label: "How to Guides",
      collapsed: true,
      link: {
        type: "doc",
        id: "guide/index",
      },
      items: [
        { type: "doc", id: "guide/nextjs-and-growthbook", label: "Next.js" },
        {
          type: "doc",
          id: "guide/create-react-app-and-growthbook",
          label: "Create React App",
        },
        {
          type: "doc",
          id: "event-trackers/GA4-google-analytics",
          label: "Google Analytics (GA4)",
        },
        {
          type: "doc",
          id: "guide/google-tag-manager-and-growthbook",
          label: "Google Tag Manager (GTM)",
        },
        {
          type: "doc",
          id: "guide/rudderstack-and-nextjs-with-growthbook",
          label: "Rudderstack + Next.js",
        },
        {
          type: "link",
          href: "https://docs.growthbook.io/open-guide-to-ab-testing.v1.0.pdf",
          label: "Guide to A/B Testing",
        },
        {
          type: "doc",
          id: "guide/importing",
          label: "Importing data into GrowthBook",
        },
      ],
    },
    {
      type: "category",
      label: "Tools",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "tools/chrome-extension",
          label: "Chrome Extension",
        },
        {
          type: "doc",
          id: "tools/vscode-extension",
          label: "Visual Studio Code Extension",
        },
        {
          type: "doc",
          id: "tools/cli",
          className: "pill-new",
          label: "Command Line Interface (CLI)",
        },
      ],
    },
    {
      type: "category",
      label: "Integrations",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "integrations/slack",
          label: "Slack alerts",
          className: "pill-new",
        },
        { type: "doc", id: "sso", label: "SSO" },
        {
          type: "doc",
          id: "integrations/datadog",
          label: "DataDog",
          className: "pill-new",
        },
      ],
    },
    { type: "doc", id: "faq", label: "FAQ" },
    {
      type: "category",
      label: "Account",
      collapsed: true,
      items: [
        {
          type: "doc",
          id: "account/user-permissions",
          label: "Roles & Permissions",
        },
      ],
    },
  ],
};

module.exports = sidebars;
