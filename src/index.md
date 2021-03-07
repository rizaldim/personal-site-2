---
title: Rizaldi's Personal Site
layout: 'layouts/home.html'
---

## Posts

<ol>
{% for item in collections.posts %}
<li>{{ item.data.title }} [{{ item.data.date | formatDate('DD-MM-YY') }}]</li>
{% endfor %}
</ol>
