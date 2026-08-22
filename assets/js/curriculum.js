/* ==========================================================================
   NISM Learn — Curriculum data
   Single source of truth for books > modules > chapters. Drives the home
   page, book pages, breadcrumbs, prev/next nav and progress calculations.

   Paths are ROOT-RELATIVE. Every page must set `window.NISM_ROOT` to the
   relative path back to the app root *before* this file loads, e.g.:
     root index.html                -> ""
     books/xa/index.html            -> "../../"
     books/xa/.../chapter-xx/       -> "../../../../"
   ========================================================================== */

(function () {
  var ROOT = typeof window.NISM_ROOT === "string" ? window.NISM_ROOT : "";

  function p(path) {
    return ROOT + path;
  }

  var CURRICULUM = {
    books: [
      {
        id: "xa",
        code: "NISM-Series-X-A",
        title: "Investment Adviser (Level 1)",
        tagline: "Foundations of personal finance, markets, products and portfolio advisory.",
        status: "active",
        path: p("books/xa/index.html"),
        totalMarks: 150,
        passPercent: 60,
        modules: [
          {
            id: "module-01",
            number: 1,
            title: "Personal Financial Planning",
            marks: 37,
            chapters: [
              {
                id: "ch01",
                number: 1,
                title: "Introduction to Personal Financial Planning",
                summary: "What financial planning is, why it matters, its scope, and the six-step advisory process.",
                path: p("books/xa/module-01-personal-financial-planning/chapter-01/index.html"),
                status: "active"
              },
              {
                id: "ch02",
                number: 2,
                title: "Time Value of Money",
                summary: "Present value, future value, annuities and compounding.",
                path: p("books/xa/module-01-personal-financial-planning/chapter-02/index.html"),
                status: "active"
              },
              {
                id: "ch03",
                number: 3,
                title: "Evaluating the Financial Position of Clients",
                summary: "Cash flow management, budgeting, net worth and contingency planning.",
                path: p("books/xa/module-01-personal-financial-planning/chapter-03/index.html"),
                status: "active"
              },
              {
                id: "ch04",
                number: 4,
                title: "Debt Management and Loans",
                summary: "Leverage, loan structures, servicing calculations and responsible borrowing.",
                path: p("books/xa/module-01-personal-financial-planning/chapter-04/index.html"),
                status: "active"
              }
            ]
          },
          {
            id: "module-02",
            number: 2,
            title: "Indian Financial Markets",
            marks: 10,
            chapters: [
              {
                id: "ch05",
                number: 5,
                title: "Introduction to the Indian Financial Markets",
                summary: "The Indian economy, market regulators and market structure.",
                path: p("books/xa/module-02-indian-financial-markets/chapter-05/index.html"),
                status: "active"
              },
              {
                id: "ch06",
                number: 6,
                title: "Securities Market Segments",
                summary: "Primary and secondary markets, and corporate actions.",
                path: p("books/xa/module-02-indian-financial-markets/chapter-06/index.html"),
                status: "active"
              }
            ]
          },
          {
            id: "module-03",
            number: 3,
            title: "Investment Products",
            marks: 30,
            chapters: [
              {
                id: "ch07",
                number: 7,
                title: "Introduction to Investment",
                summary: "Asset classes, channels and types of investment.",
                path: p("books/xa/module-03-investment-products/chapter-07/index.html"),
                status: "active"
              },
              {
                id: "ch08",
                number: 8,
                title: "Investing in Stocks",
                summary: "Equity risk, research, valuation and technical analysis.",
                path: p("books/xa/module-03-investment-products/chapter-08/index.html"),
                status: "active"
              },
              {
                id: "ch09",
                number: 9,
                title: "Investing in Fixed Income Securities",
                summary: "Bond pricing, yield measures, duration and debt markets.",
                path: p("books/xa/module-03-investment-products/chapter-09/index.html"),
                status: "active"
              },
              {
                id: "ch10",
                number: 10,
                title: "Understanding Derivatives",
                summary: "Futures, options, swaps and derivative market structure.",
                path: p("books/xa/module-03-investment-products/chapter-10/index.html"),
                status: "active"
              }
            ]
          },
          {
            id: "module-04",
            number: 4,
            title: "Investment Through Managed Portfolio",
            marks: 23,
            chapters: [
              {
                id: "ch11",
                number: 11,
                title: "Mutual Funds",
                summary: "Structures, products, investment options and systematic transactions.",
                path: p("books/xa/module-04-investment-through-managed-portfolio/chapter-11/index.html"),
                status: "active"
              },
              {
                id: "ch12",
                number: 12,
                title: "Portfolio Manager",
                summary: "PMS structures, registration, fees and performance disclosure.",
                path: p("books/xa/module-04-investment-through-managed-portfolio/chapter-12/index.html"),
                status: "active"
              },
              {
                id: "ch13",
                number: 13,
                title: "Overview of Alternative Investment Funds (AIFs)",
                summary: "AIF categories, regulation and role in portfolios.",
                path: p("books/xa/module-04-investment-through-managed-portfolio/chapter-13/index.html"),
                status: "active"
              }
            ]
          },
          {
            id: "module-05",
            number: 5,
            title: "Portfolio Construction, Performance Monitoring and Evaluation",
            marks: 20,
            chapters: [
              {
                id: "ch14",
                number: 14,
                title: "Introduction to Modern Portfolio Theory",
                summary: "Risk-return, efficient frontier and portfolio optimization.",
                path: p("books/xa/module-05-portfolio-construction-performance-monitoring-and-evaluation/chapter-14/index.html"),
                status: "active"
              },
              {
                id: "ch15",
                number: 15,
                title: "Portfolio Construction Process",
                summary: "Asset allocation, investor profiling and rebalancing.",
                path: p("books/xa/module-05-portfolio-construction-performance-monitoring-and-evaluation/chapter-15/index.html"),
                status: "active"
              },
              {
                id: "ch16",
                number: 16,
                title: "Portfolio Performance Measurement and Evaluation",
                summary: "Return measures, risk measures and performance attribution.",
                path: p("books/xa/module-05-portfolio-construction-performance-monitoring-and-evaluation/chapter-16/index.html"),
                status: "active"
              }
            ]
          },
          {
            id: "module-06",
            number: 6,
            title: "Operations, Regulatory Environment, Compliance and Ethics",
            marks: 30,
            chapters: [
              {
                id: "ch17",
                number: 17,
                title: "Operational Aspects of Investment Management",
                summary: "KYC, dematerialisation, POA and documentation for advice.",
                path: p("books/xa/module-06-operations-regulatory-environment-compliance-and-ethics/chapter-17/index.html"),
                status: "active"
              },
              {
                id: "ch18",
                number: 18,
                title: "Key Regulations",
                summary: "SCRA, SEBI Act, PFUTP, Insider Trading, IA Regulations and PMLA.",
                path: p("books/xa/module-06-operations-regulatory-environment-compliance-and-ethics/chapter-18/index.html"),
                status: "active"
              },
              {
                id: "ch19",
                number: 19,
                title: "Ethical Issues",
                summary: "Fiduciary duty, ethical dilemmas and global best practices.",
                path: p("books/xa/module-06-operations-regulatory-environment-compliance-and-ethics/chapter-19/index.html"),
                status: "active"
              },
              {
                id: "ch20",
                number: 20,
                title: "Grievance Redress Mechanism",
                summary: "Grievance redress across capital markets, banking, insurance and pensions.",
                path: p("books/xa/module-06-operations-regulatory-environment-compliance-and-ethics/chapter-20/index.html"),
                status: "active"
              }
            ]
          }
        ]
      },
      {
        id: "xb",
        code: "NISM-Series-X-B",
        title: "Investment Adviser (Level 2)",
        tagline: "Advanced advisory practice — building on Level 1 for full IA certification.",
        status: "coming-soon",
        path: p("books/xb/index.html"),
        totalMarks: null,
        passPercent: null,
        modules: []
      }
    ]
  };

  // ---- Helpers -----------------------------------------------------------

  function getBook(bookId) {
    return CURRICULUM.books.find(function (b) { return b.id === bookId; });
  }

  function flattenChapters(book) {
    var out = [];
    book.modules.forEach(function (m) {
      m.chapters.forEach(function (c) {
        out.push({ module: m, chapter: c });
      });
    });
    return out;
  }

  function findChapter(bookId, chapterId) {
    var book = getBook(bookId);
    if (!book) return null;
    for (var i = 0; i < book.modules.length; i++) {
      var m = book.modules[i];
      for (var j = 0; j < m.chapters.length; j++) {
        if (m.chapters[j].id === chapterId) {
          return { book: book, module: m, chapter: m.chapters[j] };
        }
      }
    }
    return null;
  }

  function getPrevNext(bookId, chapterId) {
    var book = getBook(bookId);
    var flat = flattenChapters(book);
    var idx = flat.findIndex(function (x) { return x.chapter.id === chapterId; });
    return {
      prev: idx > 0 ? flat[idx - 1] : null,
      next: idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null
    };
  }

  function totalChapterCount(book) {
    return flattenChapters(book).length;
  }

  window.NISM_CURRICULUM = CURRICULUM;
  window.NismCurriculum = {
    root: ROOT,
    getBook: getBook,
    flattenChapters: flattenChapters,
    findChapter: findChapter,
    getPrevNext: getPrevNext,
    totalChapterCount: totalChapterCount
  };
})();
