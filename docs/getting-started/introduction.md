---
sidebar_position: 1
title: Introduction
sidebar_label: Introduction
---

# React Ghosta

import { Badges } from "../../src/widgets"

<Badges />

## Playground

import { Playground } from "../../src/widgets"
import { Schema } from "@site/static/schema"

<Playground.Root>
<Playground.Preview />

## Emitter Options

<Playground.Table data={Schema.GhostaFire} blocklist={["classNames", "buttons", "colors"]} />
</Playground.Root>
