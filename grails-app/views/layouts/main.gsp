<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title>Zimtech</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<link href='http://fonts.googleapis.com/css?family=Fresca' rel='stylesheet' type='text/css'>
		<g:layoutHead/>
	</head>
	<body>
		<g:render template="/layouts/nav" />

		<div class="mainContainer">
			<g:layoutBody />
		</div>

		<g:render template="/layouts/footer" />
		<asset:javascript src="application.js"/>
	</body>
</html>
