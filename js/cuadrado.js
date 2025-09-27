
        function Cuadrado(){
            var num = document.form1.num1.value;
            var res = num * num;
            document.form2.resultado.value = res;
            document.form2.resultado2.value = res;
        }
        function Borrar(){
            document.form1.num1.value = "";
            document.form2.resultado.value = "";
        }
