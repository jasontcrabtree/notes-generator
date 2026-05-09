const id = "swiftdata-vs-observable.mdx";
						const collection = "notes";
						const slug = "swiftdata-vs-observable";
						const body = "\n## Short Version\n\n`SwiftData` is for persistence. `@Observable` is for UI state propagation.\n\nIf the object needs to survive app launches, participate in queries, or be stored\nin a model context, make it a SwiftData model. If the object describes temporary\nscreen state, coordination state, or a service-like object that SwiftUI should\nreact to, make it observable.\n\n## Mental Model\n\nUse `@Model` when the object is part of your app's data graph.\n\nUse `@Observable` when the object is part of your app's runtime behavior.\n\nThe overlap is that both can cause SwiftUI views to update, but they are solving\ndifferent problems. Treating SwiftData as a general state-management system tends\nto make transient UI behavior harder to reason about.\n\n## Code Example\n\n```swift\n@Observable\nfinal class EditorState {\n    var selectedID: UUID?\n    var isInspectorVisible = false\n}\n\n@Model\nfinal class Note {\n    var title: String\n    var body: String\n\n    init(title: String, body: String) {\n        self.title = title\n        self.body = body\n    }\n}\n```\n";
						const data = {title:"SwiftData vs Observable",description:"SwiftData persists model state, while Observable drives view invalidation for in-memory state.",pubDate:new Date(1778284800000),tags:["swift","swiftdata","swiftui"],source:"manual",sourceTitle:"Apple Developer Documentation: SwiftData",sourceUrl:"https://developer.apple.com/documentation/SwiftData",draft:false};
						const _internal = {
							type: 'content',
							filePath: "/Users/jasontcrabtree/Documents/Codex/notes-generator/src/content/notes/swiftdata-vs-observable.mdx",
							rawData: undefined,
						};

export { _internal, body, collection, data, id, slug };
