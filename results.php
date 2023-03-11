<?php 
$conn = mysqli_connect('localhost', 'root', 'root', 'standardized');
if(!$conn){
  echo 'Error: ' . mysqli_connect_error();
};
$ID = $_POST['id'];
$PASS = $_POST['pass'];
$query = "SELECT * FROM `standardized` WHERE id = '$ID' AND pass = '$PASS' ";
$result = mysqli_query($conn, $query);
if(mysqli_num_rows($result) > 0)
{
    foreach($result as $row)
    {
        ?> 

        <?php include './inc/html.php';?>

<?php 

};

mysqli_free_result($result);
mysqli_close($conn);
}else
{

   include './inc/pass_wrong.php';

};

?>