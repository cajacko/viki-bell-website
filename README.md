# Viki Bell Website

A node/express website for vikibell.com, running react on the front end and using Wordpress as a headless CMS.

# Graph QL
Here's a dummy query: 
```
fragment PostFragment on Post {
  id
  postId
  title
  excerpt
}

query WooYay {
  posts(first: 2) {
    edges {
      cursor
      node {
        ...PostFragment
      }
    }
    pageInfo {
      hasNextPage
    }
  }

  post(id:1) {
    ...PostFragment
  }

  UG9zdDox:node(id:"UG9zdDox") {
    id
    ... on Post {
      ...PostFragment
    }
  }

  UG9zdDoy:node(id:"UG9zdDoy") {
    id
    ... on Post {
      ...PostFragment
    }
  }
}
```

<!--- generator-readme-start generator-generator-wordpress-react -->
# generator-wordpress-react

Here is the generator readme content

TODO:
- Setup the default database as well. With all the plugin setup.
- Will need a default user and password for this and possible site title?
- So get yeomand to ask for:
-- Site Name
-- Site Url
-- Theme Name
-- User email
-- Userpassword
- Then run a script in the theme, on setup that adds that user and changes the details.
- Then We can make sure the database and settings are set up correctly.
- Have a specific developer user for the admin. This can only login on localhost and is the only user to view any crazy admin pages and any plugin setup that the normal user should not access.

- Rename 000-default.conf

<!--- generator-readme-end generator-generator-wordpress-react -->
