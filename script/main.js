$(() => {

	$.ajax({
		url: "https://reqres.in/api/users",
		type: "POST",
		data: {
		},
		success: function (response) {
			console.log(response);
		},
		error: function (err) {
			console.log(err);
		},
	},
		{
			url: 'https://reqres.in/api/users/3',
			type: 'GET',
			success: function (response) {
				console.log(response);
			},
			error: function (err) {
				console.log(err);
			}
		}
);


	// $.ajax({
	// 	url: 'https://reqres.in/api/users/3',
	// 	type: 'GET',
	// 	success:function (response) {
	// 		console.log(response);
	// 	},
	// 	error:function (err) {
	// 		console.log(err);
	// 	},
	// });




	// address: https://reqres.in/api/users/3
// method: GET
// response body:
// {
//     "data": {
//         "id": 3,
//         "email": "janet.weaver@reqres.in",
//         "first_name": "Janet",
//         "last_name": "Weaver",
//         "avatar": "https://reqres.in/img/faces/2-image.jpg"
//     }
// }
// address: https://reqres.in/api/users/3
// method: GET
// response body:
// {
//     "data": {
//         "id": 3,
//         "email": "janet.weaver@reqres.in",
//         "first_name": "Janet",
//         "last_name": "Weaver",
//         "avatar": "https://reqres.in/img/faces/2-image.jpg"
//     }
// }
});
