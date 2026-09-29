# NovaUI — AI Interface Collection

## Team
**Team Name:** NovaUI Collective

**Members**
- Member 1 — Main Dashboard / Team Coordinator
- Member 2 — AI Chat Assistant
- Member 3 — AI Agent Dashboard
- Member 4 — Agent Activity & AI Insights

> Replace the placeholder member names above with your actual names before submission.

## Selected UI Topic
**AI Interfaces & AI Agents**

NovaUI is a collection of four responsive web UI templates for modern AI products:
1. AI Chat Assistant
2. AI Agent Dashboard
3. Agent Activity
4. AI Insights

## Topic Research
A UI template is a reusable, pre-designed interface structure that helps teams prototype and build consistent digital products. Modern UI template systems commonly use reusable cards, navigation patterns, dashboards, forms and responsive layouts.

Our research looked at current AI-oriented design patterns and template concepts. Uizard describes UI templates as pre-designed screens containing relevant components and a consistent visual theme, and its AI design tools demonstrate prompt-driven, multi-screen interfaces and collaborative iteration. These observations influenced our use of consistent cards, focused workflows, responsive layouts and clear action states. [Uizard research](https://uizard.io/blog/how-to-use-and-edit-ui-design-templates/)

### Common usage
AI interfaces are commonly used for:
- AI assistants and conversational products
- AI agent monitoring
- Automation workflows
- Analytics and decision-support tools
- Productivity and enterprise software

### Why it is relevant
AI products can expose complex information and actions. Good interface design helps users understand status, provide input, review outputs and take action without unnecessary complexity.

### Patterns observed
- Clear hierarchy and short task-focused sections
- Card-based information grouping
- Status indicators and progress bars
- Activity timelines
- Prompt/input areas for conversational interfaces
- Responsive layouts for desktop and mobile
- Light/dark theme support
- Small feedback interactions after user actions

### Our implementation
NovaUI combines these patterns into a single collection with a shared visual language. Instead of copying an existing product, the team created original layouts and interactions in plain HTML, CSS and JavaScript. The templates are dependency-light and can be opened directly in a modern browser.

## Technologies
- HTML5
- CSS3
- Vanilla JavaScript
- Responsive CSS Grid and Flexbox
- LocalStorage for theme preference

## Project Structure
```text
ai-ui-template-collection/
├── index.html
├── style.css
├── script.js
├── shared.css
├── shared.js
├── ai-chat/
│   └── index.html
├── ai-agent-dashboard/
│   └── index.html
├── agent-activity/
│   └── index.html
├── ai-insights/
│   └── index.html
└── README.md
```

## Running the Project
1. Download or clone the repository.
2. Open the project in VS Code.
3. Open `index.html` in a modern browser.
4. Select any template from the collection.
5. For the best local development experience, use VS Code Live Server if available.

No build process or external package installation is required.

## GitHub Collaboration Workflow
The required team workflow is:

**Fork → Clone → Branch → Develop → Commit → Push → Pull Request → Review → Merge**

Suggested branches:
```text
feature/main-dashboard
feature/ai-chat
feature/agent-dashboard
feature/agent-activity-insights
```

Suggested meaningful commits:
```text
feat: add main NovaUI collection dashboard
feat: add responsive AI chat interface
feat: add AI agent monitoring dashboard
feat: add agent activity and insights templates
docs: update project research and team details
```

Each member should create a Pull Request from their feature branch and have another team member review it before merging.

## Final Demonstration Checklist
- Show the main collection dashboard.
- Open each of the four templates.
- Demonstrate responsive layout and interactions.
- Show the four feature branches.
- Show meaningful commits.
- Show Pull Requests.
- Show review comments/approval.
- Show the final merged result.
- Explain each member's contribution.

## Originality
The implementation is an original educational UI collection. External references were used for research and pattern observation, not for copying source code or visual assets.

## Reference
Uizard UI template research: https://uizard.io/blog/how-to-use-and-edit-ui-design-templates/
