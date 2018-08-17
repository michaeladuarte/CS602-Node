<!DOCTYPE html>
<?php 
    define('TAX_RATES',
        array(
            'Single'=> array(
                'Rates'=> array(10,15,25,28,33,35,39.6),
                'Ranges'=>array(0,9275,37650,91150,190150,413350,415050),
                'MinTax'=>array(0,927.50,5183.75,18558.75,46278.75,119934.75,120529.75)
            ),
            'Married_Jointly'=> array(
                'Rates'=> array(10,15,25,28,33,35,39.6),
                'Ranges'=>array(0,18550,75300,151900,231450,413350,466950),
                'MinTax'=>array(0,1855.00,10367.50,29517.50,51791.50,111818.50,130578.50)
            ),
            'Married_Separately'=> array(
                'Rates'=> array(10,15,25,28,33,35,39.6),
                'Ranges'=>array(0,9275,37650,75950,115725,206675,233475),
                'MinTax'=>array(0,927.50,5183.75,14758.75,25895.75,55909.25,65289.25)
            ),
            'Head_Household'=> array(
                'Rates'=> array(10,15,25,28,33,35,39.6),
                'Ranges'=>array(0,13250,50400,130150,210800,413350,44100),
                'MinTax'=>array(0,1325.00,6897.50,26835.00,49417,116258.50,125936)
            )
        )
    );
    //calculate data only if the var isn't null
    if (empty($_POST['income'])) {
        //echo 'Income is null';
    }else{
        //get form data and call functions
        $income = $_POST['income'];
        $incomeFormatted = number_format($income,2);
        $single = incomeTax($income,"Single");
        $marriedFilingJointly = incomeTax($income,"Married_Jointly");
        $marriedSeparately = incomeTax($income,"Married_Separately");
        $headOfHousehold = incomeTax($income,"Head_Household");
    }
    
        function incomeTax($income,$filingStatus){
            //TAX_RATES[single,married etc][rates, ranges etc][value]
            //loop over each rate for the given filing status
            foreach (TAX_RATES[$filingStatus]["Ranges"] as $key=>$range) {
                //determine max array index
                $maxSize = sizeof(TAX_RATES[$filingStatus]["Ranges"]) -1;
                //if the income is greater than the current range and less then the next range, or if we hit the max record (all previous conditions did not evaluate)
                // this is our record
                if($key == $maxSize){
                    $tax = calcTax($income,TAX_RATES[$filingStatus]["Rates"][$key],TAX_RATES[$filingStatus]["MinTax"][$key],TAX_RATES[$filingStatus]["Ranges"][$key]);
                    break;
                } else if(($income>$range) and ($income <= TAX_RATES[$filingStatus]["Ranges"][$key+1])){
                    $tax = calcTax($income,TAX_RATES[$filingStatus]["Rates"][$key],TAX_RATES[$filingStatus]["MinTax"][$key],TAX_RATES[$filingStatus]["Ranges"][$key]);
                    break;
                }
            }
            return $tax;
        }
        
        //function to calculate the tax, used across all filings
        function calcTax($income,$taxRate,$flat,$over) {
            $amountDue = number_format( (($income - $over) * ($taxRate/100)) + $flat, 2 );
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
        <form action="income_tax_v2.php" method="post">

        <b>Enter Net Income:</b>
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
        <td>Married Filing Separately</td>
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


<?php //for each filing create a table
    echo "<hr><br><br><h1>2016 Tax Tables</h1>";
    foreach(TAX_RATES as $key =>$filings) {
        echo "<h2><strong>$key</strong></h2>";
        echo "<table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" style=\"width: 600px\" class=\"table table-striped\">";
        echo "<tbody><tr><th>Taxable Income</th><th>Tax Rate</th></tr>";
        //for each rate in filing
        foreach (TAX_RATES[$key]["Ranges"] as $keyRange=>$range) {
            //determine max array index
            $maxSize = sizeof(TAX_RATES[$key]["Ranges"])-1;
            $flat = number_format(TAX_RATES[$key]["MinTax"][$keyRange],2);
            $fRange = number_format($range,2);
            //first row, special logic
            if($keyRange == 0){
                $nextRange = number_format(TAX_RATES[$key]["Ranges"][$keyRange+1],2);
                echo "<tr><td>$0-$$nextRange</td>";
                echo "<td>".TAX_RATES[$key]["Rates"][$keyRange]."%";
                echo "</tr>";
            //last row, special logic
            }else if($keyRange == $maxSize){
                echo "<tr><td>$$fRange or more</td>";
                echo "<td>$".$flat." plus ".TAX_RATES[$key]["Rates"][$keyRange]."% of the amount over $".$fRange. "</td>";
                echo "</tr>";
            }else{
                $nextRange = number_format(TAX_RATES[$key]["Ranges"][$keyRange+1],2);
                echo "<tr><td>$$fRange-$$nextRange</td>";
                echo "<td>$".$flat." plus ".TAX_RATES[$key]["Rates"][$keyRange]."% of the amount over $".$fRange. "</td>";
                echo "</tr>";
            }
            
            

        }
        echo "</tbody></table>";
    }       
?>
    </main>
</body>
</html>