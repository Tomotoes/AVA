---
title: Introduction to insight
order: 0
---

<embed src='@/docs/common/style.md'></embed>


A module for automatically discovering interesting patterns from multi-dimensional data.

</div>

## ✨ Features

* **Auto-Insights**: Automatically detect and highlight the insights to facilitate pattern discovery about the data.
* **Visualization & Annotation**: Clearly represent and convey insights to non-expert users.
* **Homogeneous Data Patterns**: Extract the relations between different patterns.

The pipeline of Auto-Insights:

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*mmGnTLk5JUsAAAAAAAAAAAAADmJ7AQ/original' alt='LiteInsight pipeline' width=100%/>

## 🔨 Usage


```ts
import { getInsights } from '@antv/ava';

getInsights(data, {
  limit: 30,
  measures: [
    { fieldName: 'life_expect', method: 'MEAN' },
    { fieldName: 'pop', method: 'SUM' },
    { fieldName: 'fertility', method: 'MEAN' },
  ]
});
```

## 🔍 Custom Insight Types
There are 7 types of insights, and extractors is defined by the  ***insightTypes*** attribute. By default, each and every extractor will be executed.
```ts
import { getInsights } from '@antv/ava';

getInsights(data, {
  limit: 10,
  insightTypes: ['trend', 'time_series_outlier']
});
```

Optional insight types: 
* `trend `：Detect significant increases or decreases in time series. Use [Mann-Kendall test](https://cran.r-project.org/web/packages/trend/vignettes/trend.pdf#page=2).

* `change_point `：Detect change points in time series. Use [Bayesian Online Changepoint Detection](https://arxiv.org/pdf/0710.3742.pdf).

* `majority `：Detect the outstanding indicators of data by setting proportion limits.

* `low_variance `：Detect the uniformity and determine if data points are distributed around the mean value by calculating [coefficient of variation](https://en.wikipedia.org/wiki/Coefficient_of_variation).

* `category_outlier `：Detect category outliers in the data by calculating [IQR](https://en.wikipedia.org/wiki/IQR).

* `time_series_outlier `：Detect outlier points in time series by [STL decomposition](https://otexts.com/fpp2/stl.html).

* `correlation`：Detect if there is a correlation between two sequences of data by calculating [Pearson product-moment correlation coefficient](https://en.wikipedia.org/wiki/Pearson_correlation_coefficient).

## 📖 Documentation

For more usages, please check the [API Reference](../../api/insight/auto-insights).


## 🧷 Acknowledgement

Some functionalities of insight are inspired by the following works.

* [Extracting Top-K Insights from Multi-dimensional Data](https://www.microsoft.com/en-us/research/uploads/prod/2017/02/Insights_SIGMOD17.pdf)


* [MetaInsight: Automatic Discovery of Structured Knowledge for Exploratory Data Analysis](https://www.microsoft.com/en-us/research/uploads/prod/2021/03/rdm337-maA.pdf)



