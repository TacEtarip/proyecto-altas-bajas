// filter, filtra la respuesta dando una condicion Ejemplo: filter(x=> x%2 === 1) / operador
// mapTo fuerza la respuesta a un valor dado ejemplo mapTo(true) / operador
// map usando la respuesta original da una nueva respuesta map(x => {return x.id}) / operador
// catchError si hay un error se ejecutara catchError(error => {alert(error.status; return of(false))} ) / operador
// tap ejecutara un codigo usando la respuesta cuando se subscriba tap(x=> //do some code )  / operador
// take toma o filtra la respuesta a una determinado numero de elementos take(5) / operador
// interval emite una secuencia observable de numeros en espefico intervalo tiempo interval(1000) / crea obs
// .pipe(take(5)).subscribe()
// of convierte un elemento en observable const x = 5; of(x) / crea obs
// concat concatena una cadena de observables para que todos puedan ser subscribidos al mismo tiempo. / crea obs
// ejemplo de concat
// const result = concat(of(7), throwError(new Error('oops!'))); //
// result.subscribe(x => console.log(x), e => console.error(e)); si el tipo de respuesta es diferente emitira
// el tantas respuestas como elementos concatenados.
// empty() crea un observable que se ejecutara en su totalidad inmediatamente / crea obs
// starWith se le puede pasar primer item que emitira el observable startWith(x: number) / operador
// delay la emision del observable se demorara el monto dado delay(delaytime) / operador
// Ejemplo de concat, empty, starWith y delay
/* delayedMessage(message, delayTime = 1000): Observable<string>
{
  return empty().pipe(startWith(message),delay(delayTime));
}
concat(
delayedMessage('hola');
delayedMessage('chau');
).subscribe( res: any =>{
      console.log(res);
});
*/
// fromEvent crea un observable de un evento registrado en determinado lugar o elemento
// del documento const clicks = fromEvent(document, 'click');
// clicks.subscribe(x => console.log(x));
// const source = fromEvent(document, 'click');
// const example = source.pipe(map(event => `Event time: ${event.timeStamp}`));
// scan es un acumular que toma la acumulacion de la respuestas anteriores y la nueva respuesta y las re-acumula
// Ejemplo de scan y from event
/* const clicks = fromEvent(document, 'click');
  const ones = clicks.pipe(mapTo(1));
  const seed = 0;
  const count = ones.pipe(scan((acc, one) => acc + one, seed));
  count.subscribe(x => console.log(x));
  */

// mergeMap cuando para obtener resultados de una subscrición es necesario usar los valores de otro observable
// mermap toma la respuesta del primer observable y genera una nueva respuesta usando otro observable
// mergeMap permite multiples subscriciones que no necesariamente tienen que haber sido completadas cnates que
// se realize la emision. pero no respeta el orden en ese caso usar concatMap.
// ademas permite a hacer  comparaciones con esos valores y retornar el observable correspondiente.

/*Ejemplo de mergeMap
const letters = of('a', 'b', 'c');
const result = letters.pipe(
  mergeMap(x => interval(1000).pipe(map(i => x+i))),
);
result.subscribe(x => console.log(x));
?===================================================0
const saveLocation = location => {
  return of(location).pipe(delay(500));
};
// streams
const click$ = fromEvent(document, 'click');

click$
  .pipe(
    mergeMap((e: MouseEvent) => {
      return saveLocation({
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      });
    })
  )
  // Saved! {x: 98, y: 170, ...}
  .subscribe(r => console.log('Saved!', r));

*/

// SwitchMap hace lo mismo que mergemap pero obliga a todos las subscriciones activas a terminar automaticamente
/*import { interval, fromEvent } from 'rxjs';
import { switchMap } from 'rxjs/operators';

fromEvent(document, 'click')
  .pipe(
    // restart counter on every click
    switchMap(() => interval(1000))
  )
  .subscribe(console.log);*/
// takeWhile() emite valores hasta que se cumpla una condicion
// merge combina observables en uno solo / genera un observable
// throwError emite no valor solo una notificación de error
/*interval(1000).pipe(
  mergeMap(x => x === 2
    ? throwError('Twos are bad')
    : of('a', 'b', 'c')
  ),
).subscribe(x => console.log(x), e => console.error(e));*/
/*Ejemplo SwitchMap

const obs$1 = fromEvent(document, 'click');
const obs$2 = interval(1000);
const finalObs$ = obs$1.pipe(
  switchMap(event => obs$2)
);
const subscription = finalObs$.subscribe((value) => console.log(value));

When subscribed, obs$1 will emit response for every user click on the page and obs$2 will incrementally emit
numbers for every 1 sec. Without switch map, when combining these two observables, obs$2
will continue its execution even when the user clicks in the document. But in the case of switch map,
obs$2 will cancel its previous execution and starts new execution for every user click in the document.
Cada que el observer principal se actualize switchmap cancelara el observer secundario antes de emitir denuevo*/
// of vs from of realiza una convercion de todas las  variables dentro de un array, of todos los elementos
// del array los tomara como uno solo pero son diferentes array los separara.
// *** Si tu respuesta o lo que quieres pasar es un array de objetos usar from
// Pluck tomando un objeto puedes seleccionar el parametro que quieres que te devuelva.sel-red
/* Ejemplo de pluck y from

const source = from([
  { name: 'Joe', age: 30, job: { title: 'Developer', language: 'JavaScript' } },
  //will return undefined when no job is found
  { name: 'Sarah', age: 35 }
]);
//grab title property under job
const example = source.pipe(pluck('job', 'title'));
//output: "Developer" , undefined
const subscribe = example.subscribe(val => console.log(val));*/

// debunceTime() emitira una respuesta despues de x segundos pero a diferencia de delay solo emitira el ultimo
// valor disponible.
/* Ejemplo emitir solo el ultimo resultado despues de una rafaga de click.
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

const clicks = fromEvent(document, 'click');
const result = clicks.pipe(debounceTime(1000));
result.subscribe(x => console.log(x));*/

/*// RxJS v6+ en una search box emitir el valor despues de solo 0.5 sec
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

// elem ref
const searchBox = document.getElementById('search');

// streams
const keyup$ = fromEvent(searchBox, 'keyup');

// wait .5s between keyups to emit current value
keyup$
  .pipe(
    map((i: any) => i.currentTarget.value),
    debounceTime(500)
  )
  .subscribe(console.log);*/

  // distinctUntilChange() Solo emite valores cuando son distitona al ultimo valor
/*// RxJS v6+
import { from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

// only output distinct values, based on the last emitted value
const source$ = from([1, 1, 2, 2, 3, 3]);

source$
.pipe(distinctUntilChanged())
// output: 1,2,3
.subscribe(console.log);*/

/*// RxJS v6+
import { from } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

// only output distinct values, based on the last emitted value
const source$ = from([
  { name: 'Brian' },
  { name: 'Joe' },
  { name: 'Joe' },
  { name: 'Sue' }
]);

source$
  // custom compare for name
  .pipe(distinctUntilChanged((prev, curr) => prev.name === curr.name))
  // output: { name: 'Brian }, { name: 'Joe' }, { name: 'Sue' }
  .subscribe(console.log);

//.then(expresion) realiza una expresion*/
