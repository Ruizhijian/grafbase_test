import {g, auth, config} from '@grafbase/sdk'

const User = g.model('User', {
    email: g.string().unique(),
    password: g.string(),
    name: g.string().length({min: 3, max: 50}),
    bio: g.string().optional(),
    avatar: g.url(),
    description: g.string().optional(),
    githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  projects:g.relation(()=>Project).list().optional()
    })

const Project = g.model('Project', {
  title: g.string().length({min: 3, max: 50}),
  description: g.string().length({min: 3, max: 200}),
  image: g.url(),
  liveSiteUrl: g.url(),
    githubUrl: g.url(),
  category:g.string().search(),
  createdBy:g.relation(()=>User)
})

export default config({
    schema:g,
    })
