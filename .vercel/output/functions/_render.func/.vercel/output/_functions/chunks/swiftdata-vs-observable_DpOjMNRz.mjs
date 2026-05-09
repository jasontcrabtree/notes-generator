import { h as createVNode, F as Fragment, _ as __astro_tag_component__ } from './astro/server_sZNvva9X.mjs';
import { $ as $$Image } from './_astro_assets_DUj8I8dz.mjs';
import 'clsx';

const frontmatter = {
  "title": "SwiftData vs Observable",
  "description": "SwiftData persists model state, while Observable drives view invalidation for in-memory state.",
  "pubDate": "2026-05-09T00:00:00.000Z",
  "tags": ["swift", "swiftdata", "swiftui"],
  "source": "manual",
  "sourceTitle": "Apple Developer Documentation: SwiftData",
  "sourceUrl": "https://developer.apple.com/documentation/SwiftData",
  "draft": false
};
function getHeadings() {
  return [{
    "depth": 2,
    "slug": "short-version",
    "text": "Short Version"
  }, {
    "depth": 2,
    "slug": "mental-model",
    "text": "Mental Model"
  }, {
    "depth": 2,
    "slug": "code-example",
    "text": "Code Example"
  }];
}
const __usesAstroImage = true;
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h2: "h2",
    p: "p",
    pre: "pre",
    span: "span",
    ...props.components
  };
  return createVNode(Fragment, {
    children: [createVNode(_components.h2, {
      id: "short-version",
      children: "Short Version"
    }), "\n", createVNode(_components.p, {
      children: [createVNode(_components.code, {
        children: "SwiftData"
      }), " is for persistence. ", createVNode(_components.code, {
        children: "@Observable"
      }), " is for UI state propagation."]
    }), "\n", createVNode(_components.p, {
      children: "If the object needs to survive app launches, participate in queries, or be stored\nin a model context, make it a SwiftData model. If the object describes temporary\nscreen state, coordination state, or a service-like object that SwiftUI should\nreact to, make it observable."
    }), "\n", createVNode(_components.h2, {
      id: "mental-model",
      children: "Mental Model"
    }), "\n", createVNode(_components.p, {
      children: ["Use ", createVNode(_components.code, {
        children: "@Model"
      }), " when the object is part of your app’s data graph."]
    }), "\n", createVNode(_components.p, {
      children: ["Use ", createVNode(_components.code, {
        children: "@Observable"
      }), " when the object is part of your app’s runtime behavior."]
    }), "\n", createVNode(_components.p, {
      children: "The overlap is that both can cause SwiftUI views to update, but they are solving\ndifferent problems. Treating SwiftData as a general state-management system tends\nto make transient UI behavior harder to reason about."
    }), "\n", createVNode(_components.h2, {
      id: "code-example",
      children: "Code Example"
    }), "\n", createVNode(_components.pre, {
      class: "astro-code github-dark",
      style: {
        backgroundColor: "#24292e",
        color: "#e1e4e8",
        overflowX: "auto"
      },
      tabindex: "0",
      "data-language": "swift",
      children: createVNode(_components.code, {
        children: [createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "@Observable"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "final"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " EditorState"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    var"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " selectedID: UUID"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "?"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    var"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " isInspectorVisible "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: " false"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "@Model"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "final"
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: " class"
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: " Note"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    var"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " title: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "String"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    var"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " body: "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "String"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line"
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "    init"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "("
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "title"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "String"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ", "
          }), createVNode(_components.span, {
            style: {
              color: "#B392F0"
            },
            children: "body"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ": "
          }), createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "String"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ") {"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".title "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " title"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: [createVNode(_components.span, {
            style: {
              color: "#79B8FF"
            },
            children: "        self"
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: ".body "
          }), createVNode(_components.span, {
            style: {
              color: "#F97583"
            },
            children: "="
          }), createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: " body"
          })]
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "    }"
          })
        }), "\n", createVNode(_components.span, {
          class: "line",
          children: createVNode(_components.span, {
            style: {
              color: "#E1E4E8"
            },
            children: "}"
          })
        }), "\n", createVNode(_components.span, {
          class: "line"
        })]
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}

const url = "src/content/notes/swiftdata-vs-observable.mdx";
const file = "/Users/jasontcrabtree/Documents/Codex/notes-generator/src/content/notes/swiftdata-vs-observable.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, "astro-image":  props.components?.img ?? $$Image },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "/Users/jasontcrabtree/Documents/Codex/notes-generator/src/content/notes/swiftdata-vs-observable.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, __usesAstroImage, Content as default, file, frontmatter, getHeadings, url };
