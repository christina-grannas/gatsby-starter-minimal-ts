import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"


const NotFoundPage: React.FC<PageProps> = () => {
  console.log("This is the 404");
  return (<div>404</div>
  )
}

export default NotFoundPage

//export const Head: HeadFC = () => <title>Not found</title>
