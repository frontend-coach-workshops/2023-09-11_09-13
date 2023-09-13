import { defineStore } from 'pinia'

export const useBooksStore = defineStore('booksStore', {
  state() {
    return {
      books: [
        {
          id: '9780596522308',
          title: 'Even Faster Web Sites',
          subtitle: 'Performance Best Practices for Web Developers',
          isbn: '9780596522308',
          abstract:
            "Performance is critical to the success of any web site, and yet today's web applications push browsers to their limits with increasing amounts of rich content and heavy use of Ajax. In this book, Steve Souders, web performance evangelist at Google and former Chief Performance Yahoo!, provides valuab...",
          author: 'Steve Souders',
          publisher: "O'Reilly Media",
          price: '$4.65',
          numPages: 256,
          cover: 'http://localhost:4730/covers/9780596522308.png',
          userId: 1
        },
        {
          id: '9780596529260',
          title: 'RESTful Web Services',
          subtitle: 'Web services for the real world',
          isbn: '9780596529260',
          abstract:
            '&amp;quot;Every developer working with the Web needs to read this book.&amp;quot; - David Heinemeier Hansson, creator of the Rails framework&amp;quot;RESTful Web Services finally provides a practical roadmap for constructing services that embrace the Web, instead of trying to route around it.&amp;qu...',
          author: 'Leonard Richardson, Sam Ruby',
          publisher: "O'Reilly Media",
          price: '$2.60',
          numPages: 448,
          cover: 'http://localhost:4730/covers/9780596529260.png',
          userId: 1
        },
        {
          id: '9780735649705',
          title: 'Introducing Microsoft WebMatrix',
          subtitle:
            'Everything you need to build fully-functional, scalable web sites - in one tool',
          isbn: '9780735649705',
          abstract:
            'Get a running start with Microsoft WebMatrix - the free, downloadable web development solution featuring all the tools you need for server-side programming. This practical book introduces the templates, helper libraries, and other tools in WebMatrix for building and customizing a data-driven site - ...',
          author: 'Laurence Moroney',
          publisher: 'Microsoft Press',
          price: '$34.21',
          numPages: 352,
          cover: 'http://localhost:4730/covers/9780735649705.png',
          userId: 1
        }
      ]
    }
  }
})
