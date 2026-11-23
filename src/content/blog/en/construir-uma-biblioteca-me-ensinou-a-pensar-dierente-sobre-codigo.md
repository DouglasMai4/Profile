---
title: "Building a Library Changed the Way I Think About Code"
description: "How developing Kori, my Go toolkit, changed the way I think about abstractions, simplicity, and the experience of the people who use the code we write."
pubDate: 2026-11-23
tags:
  - Go
  - Open Source
  - Software Engineering
  - Learning
---

# Building a Library Changed the Way I Think About Code

When I started working with Go, my goal was to learn a new language and get a better understanding of its ecosystem. As I mentioned in my [previous article](/en/blog/do-javascript-ao-go/), that experience ended up sparking a curiosity that went far beyond my day-to-day work.

I started experimenting with tools, building small projects, and exploring different ways to develop applications with Go.

Somewhere along the way, an idea came up: what if I built my own library?

That's how I started [Kori](https://kori.douglasmaia.dev.br), a toolkit for Go built on top of Chi.

At the time, I had no idea how much this project would teach me about something that goes far beyond writing code.

## When the Problem Is Yours, Everything Seems Simpler

At first, developing Kori seemed like a relatively straightforward exercise.

I already had some experience building APIs and knew which tools I wanted to have available. I wanted a better experience when working with handlers, simpler error handling, and fewer repetitive operations during development.

The idea was to build something that would make my own work more comfortable.

But there's an important difference between developing a solution to solve your own problem and building something that other people can use too.

When the code is only yours, you know your decisions, understand its limitations, and know how to work around any problems that come up.

When other people start using what you've built, those assumptions are no longer enough.

A function that seems intuitive to you might not be so clear to someone else. An abstraction that saves a few lines of code might hide important behavior. A seemingly small decision might end up limiting the people using your library.

I began to realize that I wasn't just developing features. I was making decisions about how other people would write their own code.

## The Responsibility of Creating Abstractions

One of the things that caught my attention the most while developing Kori was the responsibility that comes with creating abstractions.

It's easy to look at repetitive code and think we need a function to handle it. It's even easier to imagine another layer that hides implementation details and makes everything look cleaner.

But does every repetition really need an abstraction?

Are we actually simplifying something, or are we just moving complexity somewhere else?

These questions started becoming part of my decision-making process.

In Kori's case, one of the most important decisions was not trying to replace Chi.

I could have built a completely independent layer, hiding how the router works and providing a custom API for everything. But that wasn't the goal.

I wanted to add some conveniences without taking away from developers what already works well in the Go ecosystem.

That's why `http.ResponseWriter`, `*http.Request`, and Chi itself remain explicit. Developers using Kori can still work directly with the standard library and Chi's features.

This might seem like a simple decision, but it represents a philosophy I've come to value even more: an abstraction should make things easier without unnecessarily hiding what's underneath.

Not everything needs to be reinvented. Sometimes, building something good means knowing exactly what not to build.

## Thinking About the People Who Will Use It

Another important change was learning to look at the code from the perspective of someone who would use it.

When developing an application, we're usually focused on solving a business problem. We know the context, understand the rules, and know why a particular function exists.

With a library, the user experience becomes part of the product itself.

Function names, parameters, returned errors, and even the amount of code needed to perform an operation all make a difference.

In Kori, this shows up in a few design decisions.

Handlers can return `error`, allowing HTTP error handling to happen centrally. Binding helpers make it easier to receive data from different parts of an HTTP request and validate it. Response helpers reduce the need to repeat common operations.

These are small conveniences, but each one needs to make sense within the library's overall experience.

There's no point in adding a function just because it's interesting to implement. It needs to solve a real problem and, more importantly, make things clearer for the people using it.

That's when I started realizing that developing a library requires a different kind of attention.

You're not just thinking about how the code works, but also about how someone will discover, understand, and use what you've built.

## Learning by Building

Perhaps the most interesting part of this experience is realizing how much I'm still learning from the project.

Developing Kori pushed me to study Go's standard library more deeply, understand Chi better, and pay attention to details I would probably overlook if I were only building an application.

I also started looking at other libraries differently.

Before, whenever I found an interesting tool, my first thought was usually about how to use it.

Now, I also try to understand why it was built that way.

Why does this function take these parameters? Why does this abstraction exist? Why did the author decide not to implement a particular feature?

These questions change the way we interact with technology.

And there's something interesting about that: when you start building tools for other people, you begin to notice problems you didn't even know existed.

## The Project Is Bigger Than the Code

Kori is still a work in progress, and I don't claim to have found the ideal solution to every problem it aims to solve.

In fact, I believe part of the fun of developing something like this is precisely the opportunity to keep learning, receive feedback, and discover new possibilities.

I also don't think every developer needs to build their own library or publish open-source projects to grow professionally.

But I believe building something that other people can use offers a very different perspective on software engineering.

You start to realize that quality isn't just about writing code that works. It's also about making decisions that keep that code understandable, predictable, and enjoyable to use.

In the end, developing Kori taught me that writing code is only one part of the job.

We also need to think about the people who will read, maintain, integrate, and depend on what we build.

And perhaps that's one of the biggest changes in the way I see software development: moving beyond thinking only about how to solve a problem and starting to think about how to deliver a solution that makes sense to other people.

After all, building something useful feels great. But building something that other people can understand, use, and improve is a completely different experience.
