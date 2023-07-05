---
title: insight 简介
order: 0
---

<embed src='@/docs/common/style.md'></embed>


从多维数据中自动地发现数据洞察。

</div>


## ✨ 功能特性

* **自动洞察**: 自动检测并突出显示数据中的洞察，以促进数据分析过程中的模式发现。
* **可视化 & 注释**: 直观地向非专业分析人员展示和传达数据中地洞察发现。
* **共性/例外模式**: 挖掘不同数据模式之间存在的共性和差异。

自动洞察的流程如下：

<img src='https://mdn.alipayobjects.com/huamei_qa8qxu/afts/img/A*es5sSYS6XIUAAAAAAAAAAAAADmJ7AQ/original' alt='LiteInsight pipeline' width=100%/>

## 🔨 使用


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
## 🔍 自定义洞察类型
洞察类型共有七种，由配置项中的 ***insightTypes*** 属性来设置洞察算子。默认情况下，七种算子都会被执行。
```ts
import { getInsights } from '@antv/ava';

getInsights(data, {
  limit: 10,
  insightTypes: ['trend', 'time_series_outlier']
});
```

可选的洞察类型：
* 趋势检测 `trend `：检测时间序列数据在某一指标上是否存在显著增加或者减少。使用[Mann-Kendall 检验](https://cran.r-project.org/web/packages/trend/vignettes/trend.pdf#page=2)。

* 突变点检测 `change_point `：检测在时间序列中某一属性发生的突变。使用[贝叶斯在线变点检测](https://arxiv.org/pdf/0710.3742.pdf)算法。

* 显著性检测 `majority `：检测数据分布的显著性，判断是否有突出的数据指标。通过限制比例来检测。

* 低方差检测 `low_variance `：检测数据分布的均匀性，判断数据点是否分布在均值附近。通过[变异系数](https://zh.wikipedia.org/zh-hans/%E5%8F%98%E5%BC%82%E7%B3%BB%E6%95%B0)来检测。

* 类别异常检测 `category_outlier `：检测数据中的异常类别。通过计算[ IQR ](https://zh.wikipedia.org/wiki/%E5%9B%9B%E5%88%86%E4%BD%8D%E8%B7%9D)检测。

* 时间序列异常检测 `time_series_outlier `：检测在时间序列中的异常点。使用[STL 分解](https://otexts.com/fpp2/stl.html)。

* 相关性检测 `correlation`：检测两个序列之间是否存在相关关系。使用[Pearson 积矩相关检验](https://zh.wikipedia.org/wiki/%E7%9A%AE%E5%B0%94%E9%80%8A%E7%A7%AF%E7%9F%A9%E7%9B%B8%E5%85%B3%E7%B3%BB%E6%95%B0?wprov=srpw1_0)。

## ⚙️ 自定义影响力指标和权重
使用 ***impactMeasures*** 和 ***impactWeight*** 属性来自定义影响力指标和权重。
```ts
import { getInsights } from '@antv/ava';

getInsights(data, {
  limit: 10,
  // 自定义影响力（Impact）分数的计算指标
  impactMeasures: [
    { fieldName: 'life_expect', method: 'COUNT' },
    { fieldName: 'pop', method: 'COUNT' },
    { fieldName: 'fertility', method: 'COUNT' },
  ],
  // 自定义影响力（Impact）分数在洞察分数中的权重（0 ~ 1）
  impactWeight: 0.5,
});
```

## 📖 文档

更多用法请移步至 [API](../../api/insight/auto-insights)。

## 🧷 致谢

insight 其中的一些功能设计受到以下论文的启发：

* [Extracting Top-K Insights from Multi-dimensional Data](https://www.microsoft.com/en-us/research/uploads/prod/2017/02/Insights_SIGMOD17.pdf)


* [MetaInsight: Automatic Discovery of Structured Knowledge for Exploratory Data Analysis](https://www.microsoft.com/en-us/research/uploads/prod/2021/03/rdm337-maA.pdf)


