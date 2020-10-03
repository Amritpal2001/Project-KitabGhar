---
layout: books
title: Books
permalink: /books/
---

<body>
<h1 class="heading">Books</h1>
  {% for post in site.posts %}
    <!-- begin article -->
  <div class="article">
  <div class="container">
    <div class="article__wrapper">
      <a class="article__image" style="background-image: url({{site.baseurl}}/images/{{post.image}})">
      </a>
      <div class="article__content ">
        <div class="article-tags">
          <div class="article-tags__box">
            <a href="/kitab/tag/poetry" class="article__tag">{{post.tags}}</a>
          </div>
        </div>
        <h2 class="article__title">
          <a href="/kitab/2018/07/24/Rani-Tatt/">{{post.title}}</a>
        </h2>
        <h4>Price {{post.price}}</h4> 
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" onClick="cartLS.add({id: {{post.ids}}, name: '{{post.title}}', price: {{post.price}}})">Add to Cart</button>
      </div>
    </div>
  </div>
</div>
  <!-- end article -->
  {% endfor %}
<script src="{{ site.baseurl }}/js/main.js"></script>
 
</body>