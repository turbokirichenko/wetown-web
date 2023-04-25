<script lang="ts">
	import type { PageData } from "./$types";
	export let data: PageData;
</script>

<h1>todos</h1>

<form method="POST">
	<label>
		add a todo:
		<input name="description" />
	</label>
</form>

<ul>
	{#each data.todos as todo (todo.id)}
		<li class="todo">
			{todo.description}
		</li>
	{/each}
</ul>

