var readline = require("readline-sync")
var ncp = require("ncp").ncp
var replace = require("replace-in-file")


var postTypes = ["newsletter", "blog", "portfolio"];
var tags = [];
var postType = readline.keyInSelect(
  postTypes,
  "Select Post Type"
)

postType = postTypes[postType];

if (postType === "newsletter"){
  postType = "blog"
  tags = "['Newsletter']"
}

var postTitle = readline.question("What is the title? ")
var slug = readline.question(
  "Slug? [Default: '" + string_to_slug(postTitle) + "'] ",
  { defaultInput: string_to_slug(postTitle) }
)
var date = new Date().toISOString()

var sourcePath = `./content/templates/${postType}/`
var destPath = `./content/${postType}/${slug}`

var replaceOptions = {
  files: [destPath + "/index.md"],
  from: [/\$title/g, /\$date/g, /\$tags/g],
  to: [postTitle, date, tags],
}

ncp(sourcePath, destPath, err => {
  if (err) {
    return console.error(err)
  }
  console.log("Done Copying")
  replace(replaceOptions, (error, changedFiles) => {
    if (error) {
      return console.error("Error occurred:", error)
    }
    console.log("Modified files:", changedFiles.join(", "))
  })
})

function string_to_slug(str) {
  str = str.replace(/^\s+|\s+$/g, "") // trim
  str = str.toLowerCase()

  // remove accents, swap ñ for n, etc
  var from = "àáäâèéëêìíïîòóöôùúüûñç·/_,:;"
  var to = "aaaaeeeeiiiioooouuuunc------"
  for (var i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), "g"), to.charAt(i))
  }

  str = str
    .replace(/[^a-z0-9 -]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // collapse whitespace and replace by -
    .replace(/-+/g, "-") // collapse dashes

  return str
}
