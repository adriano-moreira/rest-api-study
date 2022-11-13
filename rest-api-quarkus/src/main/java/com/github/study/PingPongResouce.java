package com.github.study;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import javax.ws.rs.core.UriInfo;
import java.util.HashMap;
import java.util.List;

@Path("/ping-pong")
public class PingPongResouce {

	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public Response get(@Context UriInfo uriInfo) {
		var queryParameters = uriInfo.getQueryParameters();
		var resp = new HashMap<String, Object>();
		for (String ks : queryParameters.keySet()) {
			List<String> strings = queryParameters.get(ks);
			if (strings.size() == 1) {
				resp.put(ks, strings.get(0));
			} else {
				resp.put(ks, strings);
			}
		}
		return Response.ok(resp).build();
	}

}
