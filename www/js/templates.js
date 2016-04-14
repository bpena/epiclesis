angular.module('app.plantillas', [])
.run(templates);

var sanmiguel = '<p>San Miguel Arcángel, defiéndenos en la batalla; sé<br/>\
  nuestro amparo contra la perversidad y asechanzas<br/>\
  del demonio. Reprímale Dios, pedimos suplicantes,<br/>\
  y tú, Príncipe de la Milicia Celestial, arroja al infierno<br/>\
  con el divino poder a Satanás y a los demás espíritus<br/>\
  malignos que andan dispersos por el mundo<br/>\
  para la perdición de las almas</p>';

var mariaauxiliadora = '<p>Oh María Virgen poderosa,<br/>\
  grande e ilustre defensora de la Iglesia,<br/>\
  singular auxilio de los cristianos,<br/>\
  terrible como un ejército ordenado en batalla.</p>\
  <p>Tú sola has triunfado en todas las herejías del mundo.<br/>\
  Oh Madre en nuestras angustias,<br/>\
  en nuestras luchas, en nuestros apuros,<br/>\
  líbranos del enemigo<br/>\
  y en la hora de la muerte,<br/>\
  llévanos al Paraíso.</p>\
  Amén.';

var padrenuestro = '<p>Padre nuestro,<br/>\
                    que est&aacute;s en el cielo,<br/>\
                    santificado sea tu Nombre;<br/>\
                    venga a nosotros tu reino;<br/>\
                    h&aacute;gase tu voluntad <br/>\
                    en la tierra como en el cielo. </p>\
                    <p>Danos hoy nuestro pan de cada d&iacute;a;<br/>\
                    perdona nuestras ofensas,<br/>\
                    como tambi&eacute;n nosotros perdonamos <br/>\
                    a los que nos ofenden;<br/>\
                    no nos dejes caer en la tentaci&oacute;n,<br/>\
                    y l&iacute;branos del mal. Am&eacute;n.</p>';

var avemaria = '<p>Dios te salve Mar&iacute;a<br/>\
   llena eres de gracia<br/>\
   el Se&ntilde;or es contigo;<br/>\
   bendita t&uacute; eres&nbsp;<br/>\
   entre todas las mujeres,<br/>\
   y bendito es el fruto&nbsp;<br/>\
   de tu vientre, Jes&uacute;s.&nbsp;</p> \
   <p>Santa Mar&iacute;a, Madre de Dios,<br/>\
   ruega por nosotros, pecadores,<br/>\
   ahora y en la ahora<br/>\
   de nuestra muerte. Am&eacute;n</p>';

var gloria = '<p>Gloria al Padre, al Hijo<br/>\
   y al Esp&iacute;ritu Santo<br/>\
   Como era en el principio,<br/>\
   ahora y siempre, por los siglos<br/>\
   de los siglos. Am&eacute;n</p>';


templates.$inject = ['$templateCache'];
function templates($templateCache) {
  $templateCache.put('sanmiguel', sanmiguel);
  $templateCache.put('mariaauxiliadora', mariaauxiliadora);
  $templateCache.put('padrenuestro', padrenuestro);
  $templateCache.put('avemaria', avemaria);
  $templateCache.put('gloria', gloria);
}
