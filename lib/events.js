import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const eventsDirectory = path.join(process.cwd(), 'events')

export function getSortedEventsData() {
    // get file names under /events
    const fileNames = fs.readdirSync(eventsDirectory)
    const allEventsData = fileNames.map(fileName => {
        // remove ".md" from filename to get id
        const id = fileName.replace(/\.md$/,'')
        // read md file as string
        const fullPath = path.join(eventsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath,'utf-8')
        // use gray-matter to parse te post metadata section
        const matterResult = matter(fileContents)

        // combine the data with the id
        return {
            id,
            ...matterResult.data

        }
    })

    // sort events by date
    return allEventsData.sort(({date: a}, {date: b}) => {
        if (a < b) {
            return 1
        } else if (a > b) {
            return -1
        } else {
            return 0
        }
    })
}

export function getAllEventsIds() {
    const fileNames = fs.readdirSync(eventsDirectory)

    // returns an array that looks like this:
    // [
    //   {
    //     params: {
    //       id: 'ssg-ssr'
    //     }
    //   },
    //   {
    //     params: {
    //       id: 'pre-rendering'
    //     }
    //   }
    // ]

    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export async function getEventData(id) {
    const fullPath = path.join(eventsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')

    // use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // use remark to convert markdown into html string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)

    const contentHtml = processedContent.toString()

    // combine data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}