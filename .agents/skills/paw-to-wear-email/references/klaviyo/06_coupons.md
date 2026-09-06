# Klaviyo Coupons

## Static code

A static code such as `WEARTHEM10` can be written as literal text only when the user confirms it is the intended active code for the task.

Do not treat historical examples as proof that an offer remains active.

## Unique / dynamic coupon

Klaviyo syntax:

```django
{% coupon_code 'ExactCouponName' %}
```

The coupon name must exactly match the configured Klaviyo coupon name, including capitalization.

Do not invent the coupon name.

## QA

When using a dynamic coupon:
- confirm the exact Klaviyo coupon name;
- confirm the offer terms from task-local or canonical product/offer truth;
- do not promise validity/expiry unless supplied;
- remember preview behavior may differ from send-time code rendering.
