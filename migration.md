image
- Parse xml and generate json array of all images
- Upload to contentful
- Save each as json array
'''
[
  {
    wordpress_id: '',
    wordpress_url: '',
    contentful_data: {},
  }
]
'''

category
-


For each content type, create a json array file of each one, with references to any other wordpress entities by id.




- category x
- page x
- post x
- tag x
- image x

// save all and store in json, { [wpID]: contentfulID };
categories
tags
images


pages
posts
