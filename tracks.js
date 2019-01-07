export default {
  "WEB_CLIENT":
  {
    "displayName":"Front End",
    "category":"A",
    "description":"Develops expertise in web client technologies, such as HTML, CSS, and TypeScript",
    "milestones":
    [
      {
        "summary":"Works effectively within established web client architectures, following current best practices",
        "signals":
        [
          "Makes minor modifications to existing screens",
          "Fixes simple design quality issues",
          "Uses CSS appropriately, following style guide"
        ],
        "examples":
        [
          "Implemented footers on marketing pages",
          "Created a new Action and Reducer for the application state",
          "Built the paywall page"
        ]
      },
      {
        "summary":"Develops new instances of existing architecture, or minor improvements to existing architecture",
        "signals":
        [
          "Makes sensible abstractions based on template and code patterns",
          "Specs and builds interactive components independently",
          "Prototypes simple new features quickly"
        ],
        "examples":
        [
          "Built signup form component",
          "Created shared buttons template",
          "Built modal system"
        ]
      },
      {
        "summary":"Designs major new features and demonstrates a nuanced understanding of browser constraints",
        "signals":
        [
          "Provides useful design feedback and suggests feasible alternatives",
          "Performs systematic tasks to significantly minimise bundle size",
          "Acts a caretaker for all of Frontend code"
        ],
        "examples":
        [
          "Designed font loading strategy for Mode",
          "Researched utility of service workers for Mode",
          "Designed new Chart Designer component"
        ]
      },
      {
        "summary":"Builds complex, reusable architectures that pioneer best practices and enable engineers to work more effectively",
        "signals":
        [
          "Pioneers architecture migrations that reduce programmer burden",
          "Implements complex UX that is still easy to use",
          "Makes architectural decisions that eliminate entire classes of bugs"
        ],
        "examples":
        [
          "Migrated codebase to Typescript",
          "Implemented Observable pattern for state management",
          "Designed and implemented Websocket message passing"
        ]
      },
      {
        "summary":"Is an industry-leading expert in web technologies or sets strategic Front End direction for an eng team",
        "signals":
        [
          "Invents new techniques to innovate and overcome browser constraints",
          "Identifies and solved systemic problems with current architecture",
          "Defines a long-term vision for Frontend and ensures projects are in service of it"
        ],
        "examples":
        [
          "Defined and implemented proprietary IP core to the company's success",
          "Defined and drove migration strategy to Angular",
          "Implemented unidirectional data flow to completion"
        ]
      }
    ]
  },
  "FOUNDATIONS":
  {
    "displayName":"Foundations",
    "category":"A",
    "description":"Develops expertise in foundational systems, such as cloud, ci, deployments, and databases.",
    "milestones":
    [
      {
        "summary":"Works effectively within established structures, following current best practices",
        "signals":
        [
          "Writes thorough AARs for service outages",
          "Makes simple configuration changes to services",
          "Performs data migrations safely and effectively, without negatively impacting customers or creating service outages"
        ],
        "examples":
        [
          "Made safe and effective Salt changes",
          "Added dependency to a docker image",
          "Identified and corrected a missing index for a table"
        ]
      },
      {
        "summary":"Develops new instances of existing architecture, or minor improvements to existing architecture",
        "signals":
        [
          "Made minor version upgrades to technologies",
          "Launches service clusters using existing pattercns and frameworks.",
          "Triages service issues correctly and independently"
        ],
        "examples":
        [
          "Upgraded Go from 1.09 to 1.11",
          "Build custom packages for VoltDB",
          "Created R runtime instances based on the patterns espablished for python2-runtimes"
        ]
      },
      {
        "summary":"Designs standalone systems of moderate complexity, or major new features in existing systems",
        "signals":
        [
          "Acts as primary maintainer for existing critical systems",
          "Designs moderately complex systems",
          "Makes major version upgrades to systems and/or libraries"
        ],
        "examples":
        [
          "Refactored model relations to reduce load on the primary database server",
          "Support and improves our Concourse-CI pipeline",
          "Researched and implemented PgBouncer to improve database memory usage"
        ]
      },
      {
        "summary":"Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
        "signals":
        [
          "Designs complex projects that encompass multiple systems and technologies",
          "Demonstrates deep knowledge of foundational systems",
          "Introduces new databases and technologies to meet underserved needs"
        ],
        "examples":
        [
          "Proposed and implemented cloud directory, permission and IAM integration",
          "Researched and identified zookeeper as a suitable strongly-consistent key-values store",
          "Introduced Honeycomb and pioneered event and tracing strategy"
        ]
      },
      {
        "summary":"Is an industry-leading expert in foundational engineering or sets strategic foundational direction for an eng team",
        "signals":
        [
          "Designs transformational projects in service of long-term goals",
          "Defines the strategic vision for foundational work and supporting technologies",
          "Invents industry-leading techniques to solve complex problems"
        ],
        "examples":
        [
          "Developed and implemented multi-region strategy",
          "Defined cloud and resource management strategy",
          "Defined and developed continous delivery strategy"
        ]
      }
    ]
  },
  "SERVERS":
  {
    "displayName":"Back End",
    "category":"A",
    "description":"Develops expertise in server side engineering, using technologies such as Ruby, Go, or Java",
    "milestones":
    [
      {
        "summary":"Works effectively within established server side frameworks, following current best practices",
        "signals":
        [
          "Adds Rails endpoints following established conventions.",
          "Adds Negroni and DropWizard endpoints following established conventions.",
          "Makes minor server changes to support client needs"
        ],
        "examples":
        [
          "Adding/Editing attributes to/in a representer",
          "Adding a new API or CRUD endpoint",
          "Working with an ActiveRecord model to define relationships with other models"
        ]
      },
      {
        "summary":"Develops new instances of existing architecture, or minor improvements to existing architecture",
        "signals":
        [
          "Assesses correctness and utility of existing code and avoids blind copy-pasting",
          "Generalizes code when appropriate",
          "Determines data needs from product requirements"
        ],
        "examples":
        [
          "Identified need for new index in Postgres",
          "Normalize model names following the additions of R and Python 3",
          "Updated AWS SDKs from v1 to v2"
        ]
      },
      {
        "summary":"Designs standalone systems of moderate complexity, or major new features in existing systems",
        "signals":
        [
          "Acts as primary maintainer for existing critical systems",
          "Integrates third party services effectively",
          "Writes playbooks for new service maintenance"
        ],
        "examples":
        [
          "Implemented Single-Sign-On login to Mode",
          "Implemented payments integration with Recurly",
          "Built Pusheen or SchemaDonna server"
        ]
      },
      {
        "summary":"Builds complex, reusable architectures that pioneer best practices for other engineers, or multi-system services",
        "signals":
        [
          "Delivers complex systems that achieve their goals",
          "Avoids subtle architectural mistakes when considering new systems",
          "Makes appropriate buy vs build choices"
        ],
        "examples":
        [
          "Designed Mode's hosted-runtime architecture",
          "Designed multi-query multi-chart architecture",
          "Designed Mode's application database strategy."
        ]
      },
      {
        "summary":"Is an industry-leading expert in server side engineering or sets strategic server side direction for an eng team",
        "signals":
        [
          "Designs transformational projects of significant complexity and scope",
          "Makes decisions that have positive, long term, wide ranging consequences",
          "Identifies and solves systematic problems with current architecture"
        ],
        "examples":
        [
          "Researched, vetted, and selected Go as one of Mode's statically typed language",
          "Defined microservices architecture and guidelines for the when and whys of breaking monoliths",
          "Defined and implemented proprietary IP core to the company's success"
        ]
      }
    ]
  },
  "MOBILE":
  {
    "displayName":"Mobile",
    "category":"A",
    "description":"Develops expertise in native mobile platform engineering, such as iOS or Android",
    "milestones":
    [
      {
        "summary":"Develops new instances of existing architecture, or minor improvements to existing architecture",
        "signals":
        [
          "Delivers features requiring simple local modifications",
          "Adds simple actions that call server endpoints",
          "Reuses existing components appropriately"
        ],
        "examples":
        [
          "Added existing button to a different iOS surface",
          "Add follow button for publications on Android",
          "Fetched and displayed a new stream, using existing stream item styles"
        ]
      },
      {
        "summary":"Develops new instances of existing architecture, or minor improvements to existing architecture",
        "signals":
        [
          "Defines new useful and appropriate proto-generated objects",
          "Creates simple new activities on Android",
          "Migrates code from old patterns to new patterns"
        ],
        "examples":
        [
          "Upgraded SDWebImage to a new major version",
          "Added support for rendering a new type of stream item",
          "Prototyped a simple new feature quickly"
        ]
      },
      {
        "summary":"--",
        "signals":
        [
          "Implements complex features with a large product surface area",
          "Works effectively with Android reactive programming framework",
          "Adds support for new iOS features after a major iOS version upgrade"
        ],
        "examples":
        [
          "Designed iOS caching strategy for offline reading",
          "Built series reader on Android",
          "Informed the team about recent best practice changes and deprecations"
        ]
      },
      {
        "summary":"--",
        "signals":
        [
          "Pioneers architecture migration strategies that reduce programmer burden",
          "Fixes subtle memory management issues",
          "Implements interactive dismissals that bring delight"
        ],
        "examples":
        [
          "Upgraded CocoaPods to a new major version",
          "Designed architecture for fetching and rendering stream items",
          "Migrated Android persistance layer to reactive programming"
        ]
      },
      {
        "summary":"Is an industry-leading expert in mobile engineering or sets strategic mobile direction for an eng team",
        "signals":
        [
          "Defines long-term goals and ensures active projects are in service of them",
          "Designs and builds innovative, industry-leading UI interactions",
          "Invents new techniques to responsibly stretch limits of the Android platform"
        ],
        "examples":
        [
          "Defined and drove complete migration plan to Swift or Kotlin",
          "Implemented Android recycler views before platform support existed",
          ""
        ]
      }
    ]
  },
  "PROJECT_MANAGEMENT":
  {
    "displayName":"Project management",
    "category":"B",
    "description":"Delivers well-scoped programs of work that meet their goals, on time, to budget, harmoniously",
    "milestones":
    [
      {
        "summary":"Effectively delivers individual tasks",
        "signals":
        [
          "Estimates small tasks accurately",
          "Delivers tightly-scoped projects efficiently",
          "Writes effective technical specs outlining approach"
        ],
        "examples":
        [
          "Wrote the technical spec for standardization of API documentation ",
          "Delivered Big Query Batch Mode project",
          "Added post-deployoment hooks for Runscope"
        ]
      },
      {
        "summary":"Effectively delivers individual projects",
        "signals":
        [
          "Performs research and considers alternative approaches",
          "Balances pragmatism and polish appropriately",
          "Defines and hits interim milestones"
        ],
        "examples":
        [
          "Delivered Member Search project",
          "Developed a PoC for Picasso project",
          "Delivered management for Fastly using Terraform"
        ]
      },
      {
        "summary":"Effectively delivers projects through a small team",
        "signals":
        [
          "Delegates tasks to others appropriately",
          "Integrates business needs into project planning",
          "Advocates for appropriate project management strategy based on context"
        ],
        "examples":
        [
          "Ran project retro to assess improvement opportunities",
          "Completed project checklist unprompted and shared with primary stakeholders for tracking progress",
          "Facilitated project kickoff meeting to get buy-in"
        ]
      },
      {
        "summary":"Effectively delivers projects through a large team, or with a significant amount of stakeholders or complexity",
        "signals":
        [
          "Finds ways to deliver requested scope faster, and prioritizes backlog",
          "Manages dependencies on other projects and teams",
          "Identifies patterns across projects, promoting healthy and improving unhealthy patterns."
        ],
        "examples":
        [
          "Oversaw technical delivery of Flamingo",
          "Managed migration from Travis to Concourse",
          "Involved marketing, security, and appropriate functions at project start"
        ]
      },
      {
        "summary":"Manages major company pushes delivered by multiple teams",
        "signals":
        [
          "Considers external constraints and business objectives when planning",
          "Leads teams of teams, and coordinates effective cross-functional collaboration",
          "Highly aligned to a key company metric"
        ],
        "examples":
        [
          "Managed delivery of Mode Studio",
          "Managed delivery of Notebooks v1.0",
          "Delivered multi-month engineering project successfully"
        ]
      }
    ]
  },
  "COMMUNICATION":
  {
    "displayName":"Communication",
    "category":"B",
    "description":"Shares the right amount of information with the right people, at the right time, and listens effectively",
    "milestones":
    [
      {
        "summary":"Communicates effectively to close stakeholders when called upon, and incorporates constructive feedback",
        "signals":
        [
          "Communicates project status clearly and effectively",
          "Collaborates with others with empathy",
          "Asks for help at the appropriate juncture"
        ],
        "examples":
        [
          "Updated first responders before running a backfill or migration",
          "Updated project status changes in Asana promptly",
          "Gave thoughtful check-in and check-out comments"
        ]
      },
      {
        "summary":"Communicates with the wider team appropriately, focusing on timeliness and good quality conversations",
        "signals":
        [
          "Actively tries to understand other point of views",
          "Ensures stakeholders are aware of current blockers",
          "Chooses the appropriate tools for accurate and timely communication"
        ],
        "examples":
        [
          "Received and integrated critical feedback positively",
          "Created cross-team Slack channel for payments work",
          "Spoke to domain experts before writing spec"
        ]
      },
      {
        "summary":"Proactively shares information, actively solicits feedback, and facilitates communication for multiple stakeholders",
        "signals":
        [
          "Resolves communication difficulties between others",
          "Anticipates and shares schedule deviations in plenty of time",
          "Manages project stakeholder expectations effectively"
        ],
        "examples":
        [
          "Directed team response effectively during outages",
          "Gave a substantial All-Eng presentation on a technology",
          "Gave recurring context of upcoming related work to product leadership"
        ]
      },
      {
        "summary":"Communicates complex ideas skillfully and with nuance, and establishes alignment within the wider organization",
        "signals":
        [
          "Communicates project risk and tradeoffs skillfully and with nuance",
          "Contextualizes and clarifies ambiguous direction and strategy for others",
          "Negotiates resourcing compromises with other teams"
        ],
        "examples":
        [
          "Led a group workshop on interviewing",
          "Wrote Mode's growth framework and rationale",
          "Aligned the organization around peer feedback based on the Mode value of honest words kindly delivered"
        ]
      },
      {
        "summary":"Influences outcomes at the highest level, moves beyond mere broadcasting, and sets best practices for others",
        "signals":
        [
          "Defines processes for clear communication for the entire team",
          "Seeks the appropriate stakeholder's inputs at the right time",
          "Develops and delivers plans to execs, the board, and outside investors"
        ],
        "examples":
        [
          "Organized half year check-in company offsite",
          "Created the communication plan for a large organizational change",
          "Presented to the board about key company metrics and projects"
        ]
      }
    ]
  },
  "CRAFT":
  {
    "displayName":"Craft",
    "category":"B",
    "description":"Embodies and promotes practices to ensure excellent quality products and services",
    "milestones":
    [
      {
        "summary":"Delivers consistently good quality work",
        "signals":
        [
          "Tests new code thoroughly, both locally, and in production once shipped",
          "Writes tests for new features and bug fixes where appropirate",
          "Writes clear comments and documentation"
        ],
        "examples":
        [
          "Caught a bug on Staging before it went live",
          "Has PRs with few follow on comments",
          "Wrote tests for the happy and sad cases"
        ]
      },
      {
        "summary":"Increases the robustness and reliability of codebases, and devotes time to polishing products and systems",
        "signals":
        [
          "Refactors existing code to make it more testable",
          "Adds tests for uncovered areas",
          "Deletes unnecessary code and deprecates proactively when safe to do so"
        ],
        "examples":
        [
          "Requested tests for a PR when acting as reviewer",
          "Reduced the number of Honeybadger/BugSnag exceptions",
          "Fixed a TODO for someone else in the codebase"
        ]
      },
      {
        "summary":"Improves others' ability to deliver great quality work",
        "signals":
        [
          "Implements systems that enable better testing",
          "Gives thoughtful code reviews as a domain expert",
          "Adds tooling to improve code quality"
        ],
        "examples":
        [
          "Implemented Fixture Builder to run the same volume of tests faster",
          "Simplified release flippers API for developers",
          "Implemented dependabot for leaner dependancy maintenance"
        ]
      },
      {
        "summary":"Advocates for and models great quality with proactive actions, and tackles difficult and subtle system issues",
        "signals":
        [
          "Builds systems so as to eliminate entire classes of programmer error",
          "Focuses the team on quality with regular reminders",
          "Coordinates First Responders priorities around AARs"
        ],
        "examples":
        [
          "Added code coverage reporting to the CI pipeline",
          "Iterated repeatedly to develop Mode's replace branches solution",
          "Defined and oversaw plan for closing major security vulnerability"
        ]
      },
      {
        "summary":"Enables and encourages the entire organization to make quality a central part of the development process",
        "signals":
        [
          "Defines policies for the engineering org that encourage quality work",
          "Identifies and eliminates single points of failure throughout the organization",
          "Secures time and resources from execs to support great quality"
        ],
        "examples":
        [
          "Convinced stakeholders for resources for a large tech debt project across the teams",
          "Instituted and ensured success of a Working Group focussed on latency",
          "Started first responders program"
        ]
      }
    ]
  },
  "INITIATIVE":
  {
    "displayName":"Initiative",
    "category":"B",
    "description":"Challenges the status quo and effects positive organizational change outside of mandated work",
    "milestones":
    [
      {
        "summary":"Identifies opportunities for organizational change or product improvements",
        "signals":
        [
          "Questioning if a project decision is inline with Mode's goals",
          "Raises meaningful roadblocks in team meetings",
          "Asks leadership team difficult questions at Modal Dialog"
        ],
        "examples":
        [
          "Cut scope on a project to ensure core features were reliable and performant",
          "Brought up an issue duing a team retrospective",
          "Asked clarifying questions about Mode goals for the year with respect to a current project."
        ]
      },
      {
        "summary":"Causes change to positively impact a few individuals or minor improvement to an existing product or service",
        "signals":
        [
          "Picks bugs off the backlog proactively when blocked elsewhere",
          "Makes design quality improvements unprompted",
          "Takes on performance and security tasks proactively when blocked elsewhere"
        ],
        "examples":
        [
          "Advocated on own behalf for a change in role",
          "Consoldated database migrations",
          "Audited web client performance in Chrome and proposed fixes"
        ]
      },
      {
        "summary":"Causes change to positively impact an entire team or instigates a minor feature or service",
        "signals":
        [
          "Demonstrates concepts proactively with prototypes",
          "Fixes complicated bugs outside of regular domain",
          "Takes ownership of systems that lack a clear owner"
        ],
        "examples":
        [
          "Defined style guide to resolve style arguments",
          "Proposed and implemented autocomplete prototype",
          "Implemented Bugsnag integration"
        ]
      },
      {
        "summary":"Effects change that has a substantial positive impact on the engineering organization or a major product impact",
        "signals":
        [
          "Champions and pioneers new technologies to solve new classes of problem",
          "Exemplifies resolve in the face of challenges",
          "Instigates major new features, services, or architectures"
        ],
        "examples":
        [
          "Created and maintained the interviewing rubric",
          "Implemented Redux state architecture",
          "Merged go and jvm mono repos with bazel"
        ]
      },
      {
        "summary":"Effects change that has a substantial positive impact on the whole company",
        "signals":
        [
          "Advocates for a new role to solve a systemic issue",
          "Galvanizes the entire company and garners buy in for a new strategy",
          "Changes complex organizational processes"
        ],
        "examples":
        [
          "Migrated the organization to OKRs",
          "Built Mode mobile prototype and convinced execs to fund it",
          "Convinced leadership and engineering org to move to a new architecture"
        ]
      }
    ]
  },
  "CAREER_DEVELOPMENT":
  {
    "displayName":"Career development",
    "category":"C",
    "description":"Provides strategic support to engineers to help them build the career they want",
    "milestones":
    [
      {
        "summary":"Gives insight into opportunities and helps identify individuals' strengths and weaknesses",
        "signals":
        [
          "Advocates on behalf and in defense of a group member",
          "Shares opportunities for improvements and recognises achievements",
          "Explains appropriate available industry paths"
        ],
        "examples":
        [
          "Collected and delivered feedback",
          "Discussed career options and areas of interest informally",
          "Shows appriciation for coworkers work"
        ]
      },
      {
        "summary":"Formally supports and advocates for one person and provides tools to help them solve career problems",
        "signals":
        [
          "Ensure a group member has an appropriate role on their team",
          "Offers effective career advice to group members, without being prescriptive",
          "Creates space for people to talk through challenges"
        ],
        "examples":
        [
          "Set up and attended regular, constructive 1:1s",
          "Provided coaching on how to have difficult conversations",
          "Taught group members the GROW model"
        ]
      },
      {
        "summary":"Inspires and retains a small group of people and actively pushes them to stretch themselves",
        "signals":
        [
          "Discusses paths, and creates plans for personal and professional growth",
          "Advocates to align people with appropriate roles within organization",
          "Works with team leads to elevate emerging leaders"
        ],
        "examples":
        [
          "Reviewed individual group member progression on a regular basis",
          "Suggested appropriate group member for Tech Lead position",
          "Arranged a requested switch of discipline for a group member"
        ]
      },
      {
        "summary":"Manages interactions and processes between groups, promoting best practices and setting a positive example",
        "signals":
        [
          "Manages team transitions smoothly, respecting team and individual needs",
          "Develops best practices for conflict resolution",
          "Ensures all group members' roles are meeting their career needs"
        ],
        "examples":
        [
          "Applied learnings from situational leadership training",
          "Built a resourcing plan based on company, team, and individual goals",
          "Prevented attrition with intentional intervention"
        ]
      },
      {
        "summary":"Supports the development of a signficant part of the engineering org, and widely viewed as a trusted advisor",
        "signals":
        [
          "Supports and develops senior leaders",
          "Identified leadership training opportunities for senior leadership",
          "Pushes everyone to be as good as they can be, with empathy"
        ],
        "examples":
        [
          "Provided coaching to managers",
          "Provided coaching to staff and principal engineers.",
          "Advocated to execs for engineer development resources and programs"
        ]
      }
    ]
  },
  "ORG_DESIGN":
  {
    "displayName":"Org design",
    "category":"C",
    "description":"Defines processes and structures that enables the strong growth and execution of a diverse eng organization",
    "milestones":
    [
      {
        "summary":"Respects and participates in processes, giving meaningful feedback to help the organization improve",
        "signals":
        [
          "Reflects on meetings that leave them inspired or frustrated",
          "Teaches others about existing processes",
          "Actively participates and makes contributions within organizational processes"
        ],
        "examples":
        [
          "Facilitated effective durable team meeting with empathy",
          "Explained durable team meeting format to a new hire",
          "Provided feedback on team planning meeting"
        ]
      },
      {
        "summary":"Identifies opportunities to improve existing processes and makes changes that positively affect the local team",
        "signals":
        [
          "Defines meeting structure and cadence that meets team needs",
          "Engages in organizational systems thinking",
          "Advocates for improved diversity and inclusion, and proposes ideas to help"
        ],
        "examples":
        [
          "Defined meeting structure for small team",
          "Improved first-responder scheduling",
          "Defined standard channels for inter-team communication"
        ]
      },
      {
        "summary":"Develops processes to solve ongoing organizational problems",
        "signals":
        [
          "Creates programs that meaningfully improve organizational diversity",
          "Solves long-standing organizational problems",
          "Reallocates resources to meet organizational needs"
        ],
        "examples":
        [
          "Developed RFC template for eng design processes",
          "Created first responder program to address ongoing quality issues",
          "Defined a Working Group's mission statement and purpose."
        ]
      },
      {
        "summary":"Thinks deeply about organizational issues and identifies hidden dynamics that contribute to them",
        "signals":
        [
          "Evaluates incentive structures and their effect on execution",
          "Analyzes existing processes for bias and shortfall",
          "Ties abstract concerns to concrete organizational actions or norms"
        ],
        "examples":
        [
          "Re-evaluated compensation packages for recuiting efforts",
          "Anticipates and addresses issues arising from leadership changes",
          "Analyzed the hiring rubric for false negative potential"
        ]
      },
      {
        "summary":"Leads initiatives to address issues stemming from hidden dynamics and company norms",
        "signals":
        [
          "Builds programs to train leadership in desired skills",
          "Creates new structures that provide unique growth opportunities",
          "Leads planning and communication for reorgs"
        ],
        "examples":
        [
          "Lead efforts to increase number engineers",
          "Directed resources to meaningfully improve diversity at all levels",
          "Built the growth framework rubric"
        ]
      }
    ]
  },
  "WELLBEING":
  {
    "displayName":"Wellbeing",
    "category":"C",
    "description":"Supports the emotional well-being of group members in difficult times, and celebrates their successes",
    "milestones":
    [
      {
        "summary":"Uses tools and processes to help ensure colleagues are healthy and happy",
        "signals":
        [
          "Keeps confidences unless legally or morally obliged to do otherwise",
          "Trusts that others are acting in accordance with Mode's values",
          "Avoids blame and focuses on positive change"
        ],
        "examples":
        [
          "Ensured group members were taking enough vacation",
          "Put themself in another's shoes to understand their perspective",
          "Checked in with colleague showing signs of burnout"
        ]
      },
      {
        "summary":"Creates a positive, supportive, engaging team environment for group members",
        "signals":
        [
          "Sheds light on other experiences to build empathy and compassion",
          "Validates ongoing work and sustains motivation",
          "Proposes solutions when teams get bogged down or lose momentum"
        ],
        "examples":
        [
          "Coordinated a small celebration for a project launch",
          "Created friendly arms race in team presentation production values",
          "Noted a team without a recent win and suggested some easy quick wins"
        ]
      },
      {
        "summary":"Manages expectations across peers, leads in the org, and promotes calm",
        "signals":
        [
          "Trains group members to separate stimulus from response",
          "Maintains a pulse on individual and team morale",
          "Helps group members approach problems with curiosity"
        ],
        "examples":
        [
          "Reinvigorated team when moral was wavering",
          "Paired with a group member during a minor site issue to explore both the specific issue and how to explore issues in general",
          "Reframed a problem as a challenge, instead of a barrier, when appropriate"
        ]
      },
      {
        "summary":"Advocates for the needs of teams and group members, and proactively works to calm the organization",
        "signals":
        [
          "Ensures team environments are safe and inclusive, proactively",
          "Grounds group member anxieties in reality",
          "Tracks team retention actively and proposes solutions to strengthen it"
        ],
        "examples":
        [
          "Relieved org tension around product direction by providing extra context",
          "Encouraged group members to focus on what they can control",
          "Guided people through complex organizational change"
        ]
      },
      {
        "summary":"Manages narratives, channels negativity into inspiration and motivation, and takes care of the entire team",
        "signals":
        [
          "Recognizes and points out narratives when appropriate",
          "Works to reshape narratives from victimization to ownership",
          "Increases the psychological safety of the entire team"
        ],
        "examples":
        [
          "Converted group member from a problem haver to a problem solver",
          "Challenged false narrative and redirected to compassion and empathy",
          "Cultivated and championed a culture of empathy within the entire team"
        ]
      }
    ]
  },
  "ACCOMPLISHMENT":
  {
    "displayName":"Accomplishment",
    "category":"C",
    "description":"Inspires day to day excellence, maximises potential and effectively resolves performance issues with compassion",
    "milestones":
    [
      {
        "summary":"Helps individuals identify blockers and helps them identify next steps for resolution",
        "signals":
        [
          "Notices when someone is stuck and reaches out",
          "Helps others break down problems into feasible, tangible next steps",
          "Talks through problems non-judgmentally"
        ],
        "examples":
        [
          "Completed training on diagnosing site/service problems",
          "Unblocked a group member",
          "Reinforces and affirms positive feedback for good work"
        ]
      },
      {
        "summary":"Helps individuals resolve difficult performance issues, with insight, compassion, and skill",
        "signals":
        [
          "Gathers context outside the immediate problem",
          "Recognizes issues within local team and suggests change",
          "Works to encourage ownership of actions and responsibilities"
        ],
        "examples":
        [
          "Apply decision making skills at an impasse",
          "Empowered a group member to solve a problem directly, rather than doing it for them",
          "Gave honest feedback about poor performance, with compassion"
        ]
      },
      {
        "summary":"Intervenes in long-standing performance issues with targeted behavior change or performance plans",
        "signals":
        [
          "Aggregates signals of poor performance and creates process for improvement",
          "Investigates motivation and externalities for consistent poor performance",
          "Puts together comprehensive, achievable performance plans"
        ],
        "examples":
        [
          "Worked with group member to address persistent communication failures",
          "Arranged a transfer to another team, resulting in improved performance",
          "Managed group member closely to maximise chances of PIP success"
        ]
      },
      {
        "summary":"Mediates escalated situations, empowers underperforming teams, and resolves conflict",
        "signals":
        [
          "Identifies heightened situations and toxic or aggressive interactions",
          "Inserts themself into conflict where appropriate to calm and mediate",
          "Encourages open dialog and builds trust between parties in conflict"
        ],
        "examples":
        [
          "Empowered a team to drive forward amidst uncertainty",
          "Kept team focused on goals while staying transparent about external needs",
          "Mediated sit-down between team members to address tension"
        ]
      },
      {
        "summary":"Resolves complex organizational dysfunction, or persistent conflict at senior levels",
        "signals":
        [
          "Takes control of dysfunctional teams to organise chaos",
          "Repairs broken team dynamics and builds harmony",
          "Presides over a highly effective team of teams"
        ],
        "examples":
        [
          "Turned around the performance of a problematic team",
          "De-escalated serious tensions between teams",
          "Rebuilt trust between senior team leads"
        ]
      }
    ]
  },
  "MENTORSHIP":
  {
    "displayName":"Mentorship",
    "category":"D",
    "description":"Provides support to colleagues, spreads knowledge, and develops the team outside formal reporting structures",
    "milestones":
    [
      {
        "summary":"Mentors individuals, supports new hires, and conveys institutional knowledge",
        "signals":
        [
          "Makes themself available for informal support and advice",
          "Acts as sounding board for peers and more junior members",
          "Provides sound advice when asked"
        ],
        "examples":
        [
          "Acted as an onboarding buddy",
          "Paired with an engineer to help them with an unfamiliar area",
          "Helped a colleague work through a challenging situation"
        ]
      },
      {
        "summary":"Mentors people proactively, and guides people to realizations rather than providing the answer",
        "signals":
        [
          "Takes time to explain concepts and best practices",
          "Asks questions to illuminate concepts, rather than stating them",
          "Allows others to lead efforts when it will help their development"
        ],
        "examples":
        [
          "Shared interesting article with a team member to help with their growth",
          "Offered unprompted feedback to help growth, with empathy",
          "Lead from behind to support someone new to a leadership role"
        ]
      },
      {
        "summary":"Teaches small groups of engineers and contributes to Mode's shared knowledge base",
        "signals":
        [
          "Avoids siloing information when it can be usefully shared with others",
          "Works to increase the bus factor of systems",
          "Finds tools/strategies that work best for a team member's personality"
        ],
        "examples":
        [
          "Gave a brown bag presentation on payments",
          "Lead a Work Group discussion on Postgres best practices",
          "Wrote Eng Docs content module"
        ]
      },
      {
        "summary":"Encourages people to mentor each other, and creates ways for them to do so",
        "signals":
        [
          "Defines an entire curriculum for a discipline",
          "Draws positive attention to well-modeled mentor and teaching behaviours",
          "Creates brown bag series and lines up speakers"
        ],
        "examples":
        [
          "Created and led Mode's Women in Eng group",
          "Organized an Eng All Hands with an outside speaker",
          "Designed and taught Frontend best pracitces"
        ]
      },
      {
        "summary":"Instills and promotes a culture of learning and development within the team",
        "signals":
        [
          "Sets incentive structures to recognise and reward mentorship",
          "Empowers team members to develop themselves",
          "Role models productive and healthy mentor relationships"
        ],
        "examples":
        [
          "Instituted the professional education budget for engineers",
          "Mentored mentors",
          "Started the eng advisor program and lined up external mentors"
        ]
      }
    ]
  },
  "EVANGELISM":
  {
    "displayName":"Evangelism",
    "category":"D",
    "description":"Promotes Mode to the outside world and establishes it as an attractive and thoughtful place to work",
    "milestones":
    [
      {
        "summary":"Represents Mode well externally, and influences individuals positively",
        "signals":
        [
          "Shares personal and organizational successes with their network",
          "Attends Mode-hosted events and talks with guests",
          "Communicates genuine and honest excitement about their work externally"
        ],
        "examples":
        [
          "Shared a Mode product launch post to an external network",
          "Acted as a guide for a non-friend visitor to the office",
          "Supported PR efforts by giving a quote or having a photo taken"
        ]
      },
      {
        "summary":"Participates more centrally in small events, and takes simple actions that positively influence groups of people",
        "signals":
        [
          "Takes meaningful action to introduce people to Mode",
          "Joined public group and represented Mode appropriately, and well",
          "Organizes positive small- or medium-sized events that bring people to Mode"
        ],
        "examples":
        [
          "Volunteered as a helper for Eng Blog writing workshop",
          "Organized a short tour of the office by college students",
          "Talked at a Women Who Code event hosted at Mode"
        ]
      },
      {
        "summary":"Works hard to positively influence large groups of people on their views of Mode",
        "signals":
        [
          "Mentors or participates in a high visibility way in an external organization",
          "Builds fruitful partnerships with external organizations",
          "Writes blog posts about Mode that receive moderate traffic"
        ],
        "examples":
        [
          "Represented Mode on a panel at a conference of industry experts",
          "Established close ties with Open Source projects",
          "Built a durable, long-standing relationship with Women Who Go"
        ]
      },
      {
        "summary":"Establishes Mode as a great, innovative company and workplace to the whole industry",
        "signals":
        [
          "Establishes themself as an industry thought leader who attracts talent",
          "Publishes material about Mode's organizational or technical innovations",
          "Leverages significant following to evangelise Mode"
        ],
        "examples":
        [
          "Published a paper on Mode technology in a peer-reviewed journal",
          "Authored blog-post with Honeycomb on the path to Observability",
          "Open sources a Mode technology that is useful externally"
        ]
      },
      {
        "summary":"Introduces Mode in a positive light to a wider audience outside the industry",
        "signals":
        [
          "Delivers key messages to broad, mainstream audiences",
          "Influences people with large audiences to talk about Mode positively",
          "Drives recognition and adoption of Mode in significant numbers"
        ],
        "examples":
        [
          "Published or interviewed in a mainstream newspaper or website outside tech",
          "Keynoted a conference with international attention",
          "Represented Mode in national televised media"
        ]
      }
    ]
  },
  "RECRUITING":
  {
    "displayName":"Recruiting",
    "category":"D",
    "description":"Strengthens Mode's team by bringing in excellent staff members",
    "milestones":
    [
      {
        "summary":"Brings new candidates into the pipeline and understands how to evaluate candidates at Mode",
        "signals":
        [
          "Reviews existing network for hiring leads regularly",
          "Shadows interviews to gain familiarity with process",
          "Understands the job roles that they are interviewing for"
        ],
        "examples":
        [
          "Participated in interview strategy session",
          "Set up casual sessions to practice asking questions",
          "Referred appropriate individuals for open positions"
        ]
      },
      {
        "summary":"Interviews regularly, helps the team make meaningful hiring decisions, and helps build a diverse pipeline",
        "signals":
        [
          "Uses interview rubric to provide clear, objective feedback on candidates",
          "Interviews candidates with empathy and treats them all with equal respect",
          "Works with recruiting for sourcing candidates and diversifying hiring"
        ],
        "examples":
        [
          "Added observable evidence for every rating in interview rubric",
          "Collaborates with interview candidate rather than grills them",
          "Tested a new service for quality and diversity of candidates"
        ]
      },
      {
        "summary":"Maintains and strengthens the integrity of the current process, and regularly brings in great candidates",
        "signals":
        [
          "Teaches new interviewers how to interview with empathy",
          "Models great interview technique and feedback when shadowed",
          "Reverse shadows trainees and helps calibrate their feedback"
        ],
        "examples":
        [
          "Wrote new interview question which meets our question quality criteria",
          "Brought candidates into our pipeline proactively, with a high conversion rate",
          "Proposed useful, tangible improvements to the interview process"
        ]
      },
      {
        "summary":"Actively contributes to and leads hiring decisions, and goes to great lengths to source great candidates",
        "signals":
        [
          "Documents subtle cues in interviews that indicate values alignment",
          "Makes hiring decisions, resolving discrepancies between conflicting reports",
          "Evaluates candidates and teases out character traits"
        ],
        "examples":
        [
          "Planned engineering training on interview processes",
          "Organized and lead Mode's presence at a recruitment fair",
          "Started internship program"
        ]
      },
      {
        "summary":"Sets recruitment strategy, invests in long-term relationships for critical roles, and recruits at scale",
        "signals":
        [
          "Sets the tone, policy and goals around building a diverse, high-quality team",
          "Identifies and brings in promising acquisitions",
          "Tracks industry activity, identifying opportunities for critical roles"
        ],
        "examples":
        [
          "Talked with a senior candidate over many months to fill a critical role",
          "Organized efforts around convincing acquired engineers to join and stay",
          "Set goals, then tracked and reported metrics on team demographics over time"
        ]
      }
    ]
  },
  "COMMUNITY":
  {
    "displayName":"Community",
    "category":"D",
    "description":"Builds community internally, gives of themself to the team, and champions company values",
    "milestones":
    [
      {
        "summary":"Is available and present on current teams, and works to contribute positively to company culture",
        "signals":
        [
          "Participates in team activities and offsites",
          "Treats colleagues and clients with respect",
          "Joins groups or committees outside their own durable team"
        ],
        "examples":
        [
          "Joined and actively participated in Working Groups",
          "Shared an anecdote from a recent vacation to the team",
          "Discussed a particular solution in an AAR meeting"
        ]
      },
      {
        "summary":"Steps up, builds connectedness, and takes concrete actions to promote an inclusive culture",
        "signals":
        [
          "Makes space for others to participate",
          "Collaborates with other engineers outside direct responsibilities",
          "Finds ways to ramp up and engage new hires quickly"
        ],
        "examples":
        [
          "Created Donut Connection for meeting fellow employees",
          "Brought shy and introverted people into a dominant conversation",
          "Volunteered to take notes in a team meeting"
        ]
      },
      {
        "summary":"Contributes to improving team relatedness, and helps build a culture of lending support",
        "signals":
        [
          "Volunteers to take up additional First Responder rotation at short notice",
          "Takes time to support peers without taking away from their current projects.\n",
          "Uses position to raise difficult issues on someone's behalf"
        ],
        "examples":
        [
          "Led First Responder cycles with little support while still contributing to projects",
          "Started and drove the WHAM ERG",
          "Enthusiastically worked to clear out the bug queue before a project release"
        ]
      },
      {
        "summary":"Exemplifies selflessness for the team without compromising responsibilities, and lifts everyone up",
        "signals":
        [
          "Goes above and beyond as a First Responder to identify patterns and improve future First Responder rotations.",
          "Implements concrete programs to signficantly improve team inclusivity",
          "Proactively takes on large amounts of unglamourous but necessary work for the team"
        ],
        "examples":
        [
          "Devoted more of the day to helping outside of direct responsibilities",
          "Cleaned up unused Flippers accross the codebase",
          "Generalized PythonNotebook model naming to accomidate the new R runtime and future runtimes.\n"
        ]
      },
      {
        "summary":"Lives the company values, guards positive culture, and defines policies that support relatedness between teams",
        "signals":
        [
          "Brings separate teams together to build relatedness",
          "Holds individuals, teams, and leadership accountable to Mode's values",
          "Sets the tone, policy, and goals around maintaining an inclusive company"
        ],
        "examples":
        [
          "Organized Glass Blowing event for the whole engineering org",
          "Devised, delivered and acted on findings from an engineer happiness survey",
          "Challenged and corrected exclusionary behaviour or policies"
        ]
      }
    ]
  }}