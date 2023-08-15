using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using LuminAPI.Models;


namespace LuminAPI.Controllers
{
    [ApiController]
    [Route("api/v1/blocks")]
    public class BlocksController : ControllerBase
    {
       private static readonly List<Block> blocks = new List<Block>
        {
            new Block
            {
                TaskId = 1,
                Description = "Complete Project Proposal",
                DueDate = DateTime.Now.AddDays(7).Date,
                IsCompleted = false
            },
            new Block
            {
                TaskId = 2,
                Description = "Review Code for Bug Fixes",
                DueDate = DateTime.Now.AddDays(2).Date,
                IsCompleted = false
            },
            new Block
            {
                TaskId = 3,
                Description = "Deploy to Production",
                DueDate = DateTime.Now.AddDays(15).Date,
                IsCompleted = false
            },
        };

        [HttpGet]
        public ActionResult<IEnumerable<Block>> GetBlocks()
        {
            return Ok(blocks);
        }

        [HttpPut("completeBlock/{id}")]
        public IActionResult CompleteBlock(int id)
        {
            Block block = blocks.Find(b => b.TaskId == id);
            if (block == null)
            {
                return NotFound();
            }

            block.IsCompleted = !block.IsCompleted;
            return NoContent();
        }


        [HttpPost]
        public ActionResult<Block> CreateBlock(Block block)
        {
            if (block == null)
            {
                return BadRequest();
            }

            // Generate a unique TaskId using the current time in milliseconds
            int newTaskId = Math.Abs((int)DateTimeOffset.Now.ToUnixTimeMilliseconds());
            Console.WriteLine(newTaskId);
            block.TaskId = newTaskId;

            blocks.Add(block);

            return CreatedAtAction(nameof(GetBlocks), new { id = block.TaskId }, block);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteBlock(int id)
        {
            Block block = blocks.Find(b => b.TaskId == id);
            if (block == null)
            {
                return NotFound();
            }

            blocks.Remove(block);
            return NoContent();
        }
    }
}

