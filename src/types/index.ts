import type {
  HandlesDuplicates,
  HasRenderPriority,
  HasTextContent,
  HeadEntryOptions,
  RendersToBody,
  TagKeys,
} from './schema'

export * from './schema'

export interface HeadAttrs { [k: string]: any }

export type HookBeforeDomUpdate = ((tags: Record<string, HeadTag[]>) => void | boolean)[]
export type HookTagsResolved = ((tags: HeadTag[]) => void)[]

export interface HeadTag {
  tag: TagKeys
  props: HandlesDuplicates &
  HasRenderPriority &
  RendersToBody &
  HasTextContent & {
    [k: string]: any
  }
  _options?: HeadEntryOptions
  _position?: number
}

export interface DomUpdateCtx {
  title: string | undefined
  htmlAttrs: HeadAttrs
  bodyAttrs: HeadAttrs
  actualTags: Record<string, HeadTag[]>
}

export interface HTMLResult {
  // Tags in `<head>`
  readonly headTags: string
  // Attributes for `<html>`
  readonly htmlAttrs: string
  // Attributes for `<body>`
  readonly bodyAttrs: string
  // Tags in `<body>`
  readonly bodyTags: string
}
