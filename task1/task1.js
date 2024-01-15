let string='';

        function display(a)
        {
            document.querySelector('.js_para').innerHTML=a
        }
        function append(value)
        {
            string+=value;
            display(string);
        }