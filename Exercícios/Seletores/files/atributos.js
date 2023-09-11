$('.header-border li [href]').text('Link') // por atributo
$('.header-border li [href][title]').text('oie') // por mais de um atributo
$('.header-border li [href="about.html"]').text('sobre a gente') // por atributo com valor específico
$('.header-border li [href^="i"]').text() // por atributo cuja letra começa com um valor específico
$('.header-border li [href$="t.html"]') // por atributo cuja letra termina com um valor específico
$('.header-border li [href*="dex"]').text() // por atributo cujo valor possua determinada expressão