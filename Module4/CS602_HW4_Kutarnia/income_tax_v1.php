<!DOCTYPE html>
<?php 
    //calculate data only if the var isn't null
    if (empty($_POST['income'])) {
        //echo 'Income is null';
    }else{
        //get form data
        $income = $_POST['income'];
        $incomeFormatted = number_format($income,2);
        $single = single($income);
        $marriedFilingJointly = marriedFilingJointly($income);
        $marriedSeparately = marriedFilingSeparately($income);
        $headOfHousehold = headOfHousehold($income);
    }

        //single
		function single($income) {
			if (($income > 0) && ($income <= 9275)) {
                $over = 0;
                $taxRate = .10;
                $total = calcTax($income,$taxRate,0,0);
            } else if(($income > 9275) && ($income <= 37650)) {
                $over = 9275;
                $taxRate = .15;
                $flat = 927.50;
                $total = calcTax($income,$taxRate,$flat,$over);
			} else if(($income > 37650) && ($income <= 91150)) {
                $over = 37650;                
                $taxRate = .25;
                $flat = 5183.75;
                $total = calcTax($income,$taxRate,$flat,$over);
            }else if(($income > 91150) && ($income <= 190150)){
                $over = 91150;                
                $taxRate = .28;
                $flat = 18558.75;
                $total = calcTax($income,$taxRate,$flat,$over);
            }else if(($income > 190150) && ($income <= 413350)){
                $over = 190150;                
                $taxRate = .33;
                $flat = 46278.75;
                $total = calcTax($income,$taxRate,$flat,$over);
            }else if(($income > 413350) && ($income <= 415050)){
                $over = 413350;                
                $taxRate = .35;
                $flat = 119934.75;
                $total = calcTax($income,$taxRate,$flat,$over);
            }else{
                $over = 415050; 
                $taxRate = .396;
                $flat = 120529.75;
                $total = calcTax($income,$taxRate,$flat,$over);
            }
			return $total;
        }
        //married filing jointly
        function marriedFilingJointly($income) {
			if (($income > 0) && ($income <= 18550)) {
                $taxRate = .10;
                $total = calcTax($income,$taxRate,0,0);
            } else if(($income > 18550) && ($income <= 75300)) {
                $over = 18550; 
                $taxRate = .15;
                $flat = 1855;
                $total = calcTax($income,$taxRate,$flat,$over);
			} else if(($income > 75300) && ($income <= 1519000)) {
                $over = 75300; 
                $taxRate = .25;
                $flat = 10367.50;
                $total = calcTax($income,$taxRate,$flat,$over);
            }else if(($income > 1519000) && ($income <= 231450)){
                $over = 151900; 
                $taxRate = .28;
                $flat = 29517.50;
                $total = calcTax($income,$taxRate,$flat,$over);
            }else if(($income > 231450) && ($income <= 413350)){
                $over = 231450; 
                $taxRate = .33;
                $flat = 51791.50;
                $total = calcTax($income,$taxRate,$flat,$over);
            }else if(($income > 413350) && ($income <= 466950)){
                $over = 103350.50; 
                $taxRate = .35;
                $flat = 111818.50;
                $total = calcTax($income,$taxRate,$flat,$over);
            }else{
                $over = 466950; 
                $taxRate = .396;
                $flat = 130578.50;
                $total = calcTax($income,$taxRate,$flat,$over);
            }
			return $total;
		}
        //married filing separately
        function marriedFilingSeparately($income) {
			if (($income > 0) && ($income <= 9275)) {
                $taxRate = .10;
                $total = calcTax($income,$taxRate,0,0);
            } else if(($income > 9275) && ($income <= 37650)) {
                $over = 9275; 
                $taxRate = .15;
                $flat = 927.50;
                $total = calcTax($income,$taxRate,$flat,$over);
			} else if(($income > 37650) && ($income <= 75950)) {
                $over = 37650; 
                $taxRate = .25;
                $flat = 5183.75;
                $total = calcTax($income,$taxRate,$flat,$over);
            }else if(($income > 75950) && ($income <= 115725)){
                $over = 75950; 
                $taxRate = .28;
                $flat = 14758.75;
                $total = calcTax($income,$taxRate,$flat,$over);
            }else if(($income > 115725) && ($income <= 206675)){
                $over = 115725; 
                $taxRate = .33;
                $flat = 25895.75;
                $total = calcTax($income,$taxRate,$flat,$over);
            }else if(($income > 206675) && ($income <= 233475)){
                $over = 206675; 
                $taxRate = .35;
                $flat = 55909.25;
                $total = calcTax($income,$taxRate,$flat,$over);
            }else{
                $over = 233475; 
                $taxRate = .396;
                $flat = 65289.25;
                $total = calcTax($income,$taxRate,$flat,$over);
            }
			return $total;
        }
        //head of household
        function headOfHousehold($income) {
			if (($income > 0) && ($income <= 13250)) {
                $taxRate = .10;
                $total = calcTax($income,$taxRate,0,0);
            } else if(($income > 13250) && ($income <= 50400)) {
                $over = 13250; 
                $taxRate = .15;
                $flat = 1325;
                $total = calcTax($income,$taxRate,$flat,$over);
			} else if(($income > 50400) && ($income <= 130150)) {
                $over = 50400; 
                $taxRate = .25;
                $flat = 6897.50;
                $total = calcTax($income,$taxRate,$flat,$over);
            }else if(($income > 130150) && ($income <= 210800)){
                $over = 130150; 
                $taxRate = .28;
                $flat = 26835;
                $total = calcTax($income,$taxRate,$flat,$over);
            }else if(($income > 210800) && ($income <= 413350)){
                $over = 210800; 
                $taxRate = .33;
                $flat = 49417;
                $total = calcTax($income,$taxRate,$flat,$over);
            }else if(($income > 413351) && ($income <= 441000)){
                $over = 413350; 
                $taxRate = .35;
                $flat = 116258.50;
                $total = calcTax($income,$taxRate,$flat,$over);
            }else{
                $over = 441000; 
                $taxRate = .396;
                $flat = 125936;
                $total = calcTax($income,$taxRate,$flat,$over);
            }
			return $total;
		}
        //function to calculate the tax, used across all filings
        function calcTax($income,$taxRate,$flat,$over) {
            $amountDue = number_format( (($income - $over) * $taxRate) + $flat, 2 );
            return $amountDue;
        }

	?>
<html>
<head>
    <title>Income Tax Calculator</title>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.bundle.min.js" integrity="sha384-pjaaA8dDz/5BgdFUPX6M/9SUZv4d12SUPF0axWc+VRZkx5xU3daN+lYb49+Ax+Tl" crossorigin="anonymous"></script>
<link href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
</head>
<body>
    <main>
        <h1>Income Tax Calculator</h1>
        <form action="income_tax_v1.php" method="post">

        <b>Your Net Income:</b>
        <input type="text" name="income" placeholder="Enter your Income"><br>
        <input type="submit" style="margin-left:140px;margin-top:10px;" class="btn btn-primary" value="Submit"><br>
        <br>
    </form>
    <!-- show table after POST and calculations -->
    <?php
        //if the variables for the calculations are complete, show table 
        if(!empty($single)) {echo "<h3>With a net taxable income of $ $incomeFormatted</h3>";
            echo "
            <table class=\"table table-striped\">
    <tr>
        <th>Status</th>
        <th>Tax</th> 
    </tr>
    <tr>
        <td>Single</td>
        <td>$$single</td> 
    </tr>
    <tr>
        <td>Married Filing Jointly</td>
        <td>$$marriedFilingJointly</td> 
    </tr>
    <tr>
        <td>Married Filing Jointly</td>
        <td>$$marriedSeparately</td> 
    </tr>
    <tr>
        <td>Head of Household</td>
        <td>$$headOfHousehold</td> 
    </tr>
</table>
";
        } else{
            //do nothing since no data to show
        }
        ?>
    </main>
</body>
</html>