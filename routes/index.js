exports.index = function(req, res){
  res.render('index', { 
    title: 'Sassy Sass',
    description: 'Sassy Sass is a scaffolding tool to help you organize your project’s Sass structure.',
    tagline: 'A scaffolding tool to help you organize your project’s Sass structure.',
    logo: 'img/sassy-sass.svg',
    github: 'https://github.com/ryanburgess/sassysass',
    contributors:[
      {
        'name': 'Ryan Burgess',
        'url': 'https://github.com/ryanburgess',
        'avatar': '3660994',
        'twitter': 'burgessdryan'
      },
      {
        'name': 'Wai Lun Poon',
        'url': 'https://github.com/w4ilun',
        'avatar': '2881361',
        'twitter': 'monkeytypewritr'
      },
      {
        'name': 'Augustus Yuan',
        'url': 'https://github.com/ryanburgess',
        'avatar': '2054339',
        'twitter': 'augburto'
      }
    ]
  });
};