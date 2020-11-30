# Data Driven Product Management

Reaching product management nirvana requires that PMs meticulously measure the impact their features have on the company. 

What are the business's objectives?
- increasing free trial conversions to paid?
- reducing support ticket volume?
- decreasing time to onboard new customers?

A *data driven* Product Manager understands how users interact with their features, and in using this data, creates sound business strategies aimed at improving company objectives.

The ultimate goal of this strategy is to encourage users to take actions which more closely align with what the business wants. Usually this means reducing costs and increasing revenue in some way.

## First, Build a Plan
Put together an outline of what you're looking to achieve before considering the technologies to get you there. This rough plan will help to drive the decisions you make when implementing the supporting data infrastructure. 

**Determine from your business stakeholders what is the most important metric to improve.**

Here are some common goals:
- Increase LTV of existing customers (upsell, cross-sell)
- Drive renewals and reduce churn
- Increase engagement and overall adoption
- Decrease support ticket volume
- Increase customer feature adoption

Next create a draft of what data/events you'd need to measure this KPI:

```
Goal: Decrease amount of customers who cancel their plans

Question: Would well time offers encourage users to not cancel? 

User flow: Views Plan Page -> Clicks Modify Plan Button -> Clicks Cancel Plan Button

Specifics to track:
Event name: View Plan Page
      -Property 1: Username | Example Value: (dexter)
      -Property 2: Subscription Type | Example Value: (Gold Plan)
      -Property 3: Subscription Amount | Example Value: ($50.00)
      -Property 4: Subscription Created | Example Value: (10/10/2020)    
      -Property 6: Account | Example Value: (Company XYZ)
      -Property 7: Account Created | Example Value: (10/10/2020)
Event name: Click 'Modify Plan' Button
      -Property 1: Username | Example Value: (dexter)
      -Property 2: Subscription Type | Example Value: (Gold Plan)
      -Property 3: Knowledgebase article last viewed | Example Value: (Help Downloading Report)
Event name: Click 'Cancel Plan' Button
      -Property 1: Username | Example Value: (dexter)
      -Property 2: Account | Example Value: (Company XYZ)
      -Property 3: Account Created | Example Value: (10/10/2020)
      -Property 4: Username | Example Value: (dexter)

```

## Instrumenting your App

Check out Mixpanel's tracking guide as an excellent template for implementing product events: [Tracking Plan](https://mixpanel.app.box.com/s/1xou3n8z6a14igg3hiiuxs7ur15cii4y).

![One Pager](/Implementation_Spec_.png)

## Tools of the Trade

Here is a list of great companies who make it easier for PMs and Developers to collect events and make sense of their data:
- [Posthog](https://github.com/PostHog/posthog)
- [Pendo](https://www.pendo.io/)
- [Smartlook](https://www.smartlook.com/website-analytics/)
- [Mixpanel](https://mixpanel.com/)

<comments/>