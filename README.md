# Класс калькулятора для операций с деньгами в разных валютах#

Данный класс содержит методы работы с валютами.
Так что бы они принимали указанные параметры на вход и возвращали такие данные, что написаны в комментариях.
Конструктор принимает произвольное количество аргументов вида ({код валюты 1: значение 1, код валюты 2: значение 2, код валюты 3: значение 3  },{код валюты 1: значение 1, код валюты 3: значение 3 }, …..)

Есть методы:
Метод  add принимает аргументы (код валюты, значение)
Метод minus принимает аргументы (код валюты, значение)
Метод getAmount принимает аргумент код валюты, возвращает сумму
Метод toPlainObject
Метод  isEmpty
Метод sum
Коды валюты:
            643: Рубль
            840: Доллар США
            978: Евро
 
Реализовать его, что бы работал следующий код:
 
 
    var balances = new Balances(),
                 rurs;
    balances.add(Balances.CODE_RUR,50)
      .add(Balances.CODE_EUR,5)
      .add(Balances.CODE_USD,0)
    
    rurs=balances.get(Balances.CODE_RUR)
    rurs.add(Balances.CODE_RUR,1)
        .minus(Balances.CODE_RUR,5)
    
    console.log('isEmpty: '+rurs.isEmpty())
    // isEmpty:  'false'
    console.log('isEmpty: '+balances.get(Balances.CODE_USD).isEmpty())
    // isEmpty:  'true'
    console.log('Рубли: '+rurs)
    // Рубли:  '46 RUR'
    console.log('Рубли: '+rurs.getAmount(Balances.CODE_RUR))
    // Сумма:  '46'
    console.log('Доллары: '+rurs.getAmount(Balances.CODE_EUR))
    // Сумма:  '0'
    console.log('Сумма: '+balances)
    // Сумма:  '50 RUR, 5 EUR'
    console.log('Объект',balances.toPlainObject())
    // Объект  Object {643: 50, 810: 0, 980: 5}
     console.log('Объект',Balances.sum({643:50, 810:10},{980:6},{643:7}))
    // Объект Object {643: 57, 840: 10, 980: 6}
    console.log('Сумма: '+new Balances({643:50,810:10},{980:6},{643:7}))
     // Сумма: 57 RUR, 10 USD, 6 EUR
