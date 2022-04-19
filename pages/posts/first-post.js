import React, { useEffect } from "react";
import { run } from '../../libs/ddbCreateTable'

export default function FirstPost() {
  useEffect(() => {
    run()
  }, [])

  return <h1>First Post</h1>
}